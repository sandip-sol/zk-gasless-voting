const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("AnonPoll end-to-end", function () {
  async function deployAll() {
    const [dao, voter1, voter2, rando] = await ethers.getSigners();

    const Aggregator = await ethers.getContractFactory("EligibilityAggregator");
    const aggregator = await Aggregator.deploy(dao.address);
    await aggregator.waitForDeployment();

    const Verifier = await ethers.getContractFactory("MockSemaphoreVerifier");
    const verifier = await Verifier.deploy();
    await verifier.waitForDeployment();

    // allow the mock verifier
    await aggregator.connect(dao).setVerifier(await verifier.getAddress(), true);

    const Factory = await ethers.getContractFactory("PollFactory");
    const factory = await Factory.deploy();
    await factory.waitForDeployment();

    // times
    const now = await time.latest();
    const start = now + 10;            // starts in 10s
    const end   = start + 3600;        // one hour window

    // create a poll
    const tx = await factory.createAnonPoll(
      "ipfs://cid-abc123",
      start,
      end,
      3,                                // 3 options
      await aggregator.getAddress()
    );
    const rc = await tx.wait();

    // find PollCreated event
    const evt = rc.logs.find(
      (l) => l.fragment && l.fragment.name === "PollCreated"
    );
    const pollId = evt.args.pollId;
    const pollAddr = evt.args.poll;

    const poll = await ethers.getContractAt("AnonPoll", pollAddr);

    return { dao, voter1, voter2, rando, aggregator, verifier, factory, poll, pollId, start, end };
  }

  it("blocks votes before start and after end; allows within window", async () => {
    const { poll, verifier, voter1, start, end, aggregator } = await deployAll();

    // proofData = abi.encode(address identity, bool valid)
    const proof = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter1.address, true]
    );

    // Before start
    await expect(
      poll.connect(voter1).vote(0, await verifier.getAddress(), proof)
    ).to.be.revertedWith("window");

    // Move to start
    await time.increaseTo(start + 1);

    // In window -> success
    await expect(
      poll.connect(voter1).vote(0, await verifier.getAddress(), proof)
    ).to.emit(poll, "Voted");

    // After end
    await time.increaseTo(end + 1);
    const proof2 = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter1.address, true]
    );
    await expect(
      poll.connect(voter1).vote(1, await verifier.getAddress(), proof2)
    ).to.be.revertedWith("window");
  });

  it("prevents duplicate voting via nullifier reuse", async () => {
    const { poll, verifier, voter1, start } = await deployAll();
    await time.increaseTo(start + 1);

    const proof = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter1.address, true]
    );

    await expect(
      poll.connect(voter1).vote(2, await verifier.getAddress(), proof)
    ).to.emit(poll, "Voted");

    // same identity => same nullifier => duplicate revert
    await expect(
      poll.connect(voter1).vote(1, await verifier.getAddress(), proof)
    ).to.be.revertedWith("duplicate");
  });

  it("rejects invalid proofs & out-of-range options", async () => {
    const { poll, verifier, voter2, start } = await deployAll();
    await time.increaseTo(start + 1);

    const badProof = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter2.address, false]  // invalid flag
    );
    await expect(
      poll.connect(voter2).vote(0, await verifier.getAddress(), badProof)
    ).to.be.revertedWith("invalid proof");

    const goodProof = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter2.address, true]
    );
    await expect(
      poll.connect(voter2).vote(999, await verifier.getAddress(), goodProof)
    ).to.be.revertedWith("bad opt");
  });

  it("verifier must be DAO-approved", async () => {
    const { poll, start, voter1 } = await deployAll();
    await time.increaseTo(start + 1);

    // Use a random address as "verifier" which is not approved
    const fakeVerifier = voter1.address;
    const proof = ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "bool"],
      [voter1.address, true]
    );

    await expect(
      poll.connect(voter1).vote(0, fakeVerifier, proof)
    ).to.be.revertedWith("verifier not allowed");
  });

  it("tallies correctly and returns results()", async () => {
    const { poll, verifier, voter1, voter2, start } = await deployAll();
    await time.increaseTo(start + 1);

    const p1 = ethers.AbiCoder.defaultAbiCoder().encode(["address","bool"], [voter1.address, true]);
    const p2 = ethers.AbiCoder.defaultAbiCoder().encode(["address","bool"], [voter2.address, true]);

    await poll.connect(voter1).vote(0, await verifier.getAddress(), p1);
    await poll.connect(voter2).vote(2, await verifier.getAddress(), p2);

    const results = await poll.results();
    expect(results.length).to.eq(3);
    expect(results[0]).to.eq(1n);
    expect(results[1]).to.eq(0n);
    expect(results[2]).to.eq(1n);
  });
});
