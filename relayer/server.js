// relayer/server.js
require("dotenv/config");
const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");

// paste config from deploy-local / .env
const CONFIG = {
  forwarder: process.env.FORWARDER_ADDRESS,
  poll: process.env.POLL_ADDRESS,
  verifier: process.env.VERIFIER_ADDRESS,
  rpcUrl: process.env.RPC_URL, // 👈 NO localhost fallback
};

if (!CONFIG.rpcUrl) {
  console.error("RPC_URL not set. Please set Hoodi RPC URL in .env");
  process.exit(1);
}

const RELAYER_PK = process.env.RELAYER_PK;
if (!RELAYER_PK || RELAYER_PK === "0x...") {
  console.error("Set RELAYER_PK in .env");
  process.exit(1);
}

// SimpleForwarder ABI
const FORWARDER_ABI = [
  "function getNonce(address from) view returns (uint256)",
  "function execute((address from,address to,uint256 value,uint256 gas,uint256 nonce,bytes data), bytes) payable returns (bytes)",
];

async function main() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // 👇 Use Hoodi RPC from env
  const provider = new ethers.JsonRpcProvider(CONFIG.rpcUrl);

  // (optional but recommended) – verify you’re on Hoodi chain
  const network = await provider.getNetwork();
  console.log("Connected network:", network);
  if (network.chainId !== 560048n) {
    console.error(
      `Wrong chainId: expected 560048 (Hoodi), got ${network.chainId}. Check RPC_URL`
    );
    process.exit(1);
  }

  const relayerWallet = new ethers.Wallet(RELAYER_PK, provider);
  const forwarder = new ethers.Contract(
    CONFIG.forwarder,
    FORWARDER_ABI,
    relayerWallet
  );

  console.log("Relayer:", await relayerWallet.getAddress());
  console.log("Forwarder:", CONFIG.forwarder);
  console.log("Using RPC:", CONFIG.rpcUrl);

  app.post("/relay", async (req, res) => {
    try {
      const { forwardRequest, signature } = req.body;
      if (!forwardRequest || !signature) {
        return res
          .status(400)
          .json({ error: "missing forwardRequest or signature" });
      }

      console.log("Incoming meta-tx:", forwardRequest);

      const tx = await forwarder.execute(forwardRequest, signature);
      console.log("Relayed tx:", tx.hash);
      const receipt = await tx.wait();
      console.log("Mined in block:", receipt.blockNumber);

      res.json({ txHash: tx.hash });
    } catch (e) {
      console.error("Relay failed:", e);
      res.status(500).json({ error: "relay failed", details: e.toString() });
    }
  });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Relayer listening on port ${PORT}`));
}

main().catch(console.error);
