const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("Gasless vote via SimpleForwarder (meta-tx)", function () {
  async function deployStack() {
    const [dao, relayer, voter, voter2] = await ethers.getSigners();

    // Core contracts
    const Aggregator = await ethers.getContractFactory("EligibilityAggregator");
    const aggregator = await Aggregator.deploy(dao.address);
    await aggregator.waitForDeployment();

    const Verifier = await ethers.getContractFactory("MockSemaphoreVerifier");
    const verifier = await Verifier.deploy();
    await verifier.waitForDeployment();

    await aggregator.connect(dao).setVerifier(await verifier.getAddress(), true);

    const Factory = await ethers.getContractFactory("PollFactory");
    const factory = await Factory.deploy();
    await factory.waitForDeployment();

    // Create poll
    const now = await time.latest();
    const start = now + 5;
    const end = start + 3600;

    const tx = await factory.createAnonPoll(
      "ipfs://cid-xyz",
      start,
      end,
      3,
      await aggregator.getAddress()
    );
    const rc = await tx.wait();
    const evt = rc.logs.find((l) => l.fragment && l.fragment.name === "PollCreated");
    const pollAddr = evt.args.poll;
    const poll = await ethers.getContractAt("AnonPoll", pollAddr);

    // Forwarder
    const Fwd = await ethers.getContractFactory("SimpleForwarder");
    const forwarder = await Fwd.deploy();
    await forwarder.waitForDeployment();

    return {
      dao,
      relayer,
      voter,
      voter2,
      aggregator,
      verifier,
      factory,
      poll,
      start,
      end,
      forwarder,
    };
  }

  async function signForwardRequest(forwarder, signer, req) {
    const abi = ethers.AbiCoder.defaultAbiCoder();
    const structHash = ethers.keccak256(
      abi.encode(
        ["address", "address", "uint256", "uint256", "uint256", "bytes32"],
        [req.from, req.to, req.value, req.gas, req.nonce, ethers.keccak256(req.data)]
      )
    );
    const signature = await signer.signMessage(ethers.getBytes(structHash));
    return signature;
  }

  it("relayer pays gas; voter only signs", async () => {
    const { poll, verifier, forwarder, start, voter, relayer } = await deployStack();

    await time.increaseTo(start + 1);

    const proof = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter.address, true]
    );

    // encode AnonPoll.vote(uint256,address,bytes)
    const voteData = poll.interface.encodeFunctionData("vote", [
      1,
      await verifier.getAddress(),
      proof,
    ]);

    const nonce = await forwarder.getNonce(voter.address);
    const req = {
      from: voter.address,
      to: await poll.getAddress(),
      value: 0,
      gas: 1_000_000,
      nonce: Number(nonce),
      data: voteData,
    };
    const sig = await signForwardRequest(forwarder, voter, req);

    const relayerBalanceBefore = await ethers.provider.getBalance(relayer.address);

    const tx = await forwarder.connect(relayer).execute(req, sig);
    await tx.wait();

    const res = await poll.results();
    expect(res[1]).to.eq(1n); // option 1 got one vote

    const relayerBalanceAfter = await ethers.provider.getBalance(relayer.address);
    expect(relayerBalanceAfter).to.be.lt(relayerBalanceBefore); // relayer paid gas
  });

  it("duplicate meta-votes by the same identity are rejected (revert 'duplicate')", async () => {
    const { poll, verifier, forwarder, start, voter, relayer } = await deployStack();
    await time.increaseTo(start + 1);

    const proof = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter.address, true]
    );

    // First meta-vote
    let voteData = poll.interface.encodeFunctionData("vote", [
      0,
      await verifier.getAddress(),
      proof,
    ]);
    let nonce = await forwarder.getNonce(voter.address);
    let req = {
      from: voter.address,
      to: await poll.getAddress(),
      value: 0,
      gas: 1_000_000,
      nonce: Number(nonce),
      data: voteData,
    };
    let sig = await signForwardRequest(forwarder, voter, req);
    await forwarder.connect(relayer).execute(req, sig);

    const before = await poll.results();

    // Second meta-vote with same identity -> should bubble 'duplicate' revert
    voteData = poll.interface.encodeFunctionData("vote", [
      2,
      await verifier.getAddress(),
      proof,
    ]);
    nonce = await forwarder.getNonce(voter.address);
    req = {
      from: voter.address,
      to: await poll.getAddress(),
      value: 0,
      gas: 1_000_000,
      nonce: Number(nonce),
      data: voteData,
    };
    sig = await signForwardRequest(forwarder, voter, req);

    await expect(
      forwarder.connect(relayer).execute(req, sig)
    ).to.be.revertedWith("duplicate");

    const after = await poll.results();
    // tallies unchanged after failed duplicate
    expect(after[0]).to.eq(before[0]);
    expect(after[1]).to.eq(before[1]);
    expect(after[2]).to.eq(before[2]);
  });
});
