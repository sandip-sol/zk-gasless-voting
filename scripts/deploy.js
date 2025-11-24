const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // 1. Deploy EligibilityAggregator
  const Aggregator = await hre.ethers.getContractFactory("EligibilityAggregator");
  const aggregator = await Aggregator.deploy(deployer.address);
  await aggregator.waitForDeployment();
  const aggregatorAddress = await aggregator.getAddress();
  console.log("EligibilityAggregator deployed to:", aggregatorAddress);

  // 2. Deploy MockSemaphoreVerifier
  // In production, you might want a real verifier or a different one
  const Verifier = await hre.ethers.getContractFactory("MockSemaphoreVerifier");
  const verifier = await Verifier.deploy();
  await verifier.waitForDeployment();
  const verifierAddress = await verifier.getAddress();
  console.log("MockSemaphoreVerifier deployed to:", verifierAddress);

  // 3. Whitelist the verifier
  const tx = await aggregator.setVerifier(verifierAddress, true);
  await tx.wait();
  console.log("Verifier whitelisted in Aggregator");

  // 4. Deploy PollFactory
  const Factory = await hre.ethers.getContractFactory("PollFactory");
  const factory = await Factory.deploy();
  await factory.waitForDeployment();
  const factoryAddress = await factory.getAddress();
  console.log("PollFactory deployed to:", factoryAddress);

  // 5. Deploy SimpleForwarder (for Relayer)
  const Fwd = await hre.ethers.getContractFactory("SimpleForwarder");
  const forwarder = await Fwd.deploy();
  await forwarder.waitForDeployment();
  const forwarderAddress = await forwarder.getAddress();
  console.log("SimpleForwarder deployed to:", forwarderAddress);

  console.log("\nDeployment Complete!");
  console.log("----------------------------------------------------");
  console.log("Updating .env files...");

  // Define paths
  const rootDir = path.resolve(__dirname, "..");
  const backendEnvPath = path.join(rootDir, ".env");
  const frontendEnvPath = path.join(rootDir, "ui", ".env.local");

  // Prepare content
  // We read existing .env content to preserve keys like PRIVATE_KEY if needed, 
  // but for simplicity and to ensure correctness as requested, we will overwrite the relevant keys.
  // However, we must preserve the PRIVATE KEYS and API KEYS if they are in the same file.
  // The user said "should overwite .env files", implying a full overwrite or at least updating the addresses.
  // Given the user's request "remove localhost... and from scripts.deploy.js should overwite .env files",
  // I will read the keys that are NOT generated (like PKs) and rewrite the file.

  // Helper to read env file into object
  const readEnv = (filePath) => {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, "utf8");
    return content.split("\n").reduce((acc, line) => {
      const [key, ...val] = line.split("=");
      if (key && val) acc[key.trim()] = val.join("=").trim();
      return acc;
    }, {});
  };

  // Update Backend .env
  const backendEnv = readEnv(backendEnvPath);
  backendEnv["FORWARDER_ADDRESS"] = forwarderAddress;
  backendEnv["VERIFIER_ADDRESS"] = verifierAddress;
  // backendEnv["POLL_ADDRESS"] = ""; // Keep existing or empty, generated on creation
  // Ensure RPC URL is set to Hoodi
  if (!backendEnv["RPC_URL"] || backendEnv["RPC_URL"].includes("localhost") || backendEnv["RPC_URL"].includes("127.0.0.1")) {
    // Fallback if not set, though user likely has it. 
    // We'll use the one from hardhat config if possible, or a placeholder.
    // For now, let's assume the user wants the one they configured.
    backendEnv["RPC_URL"] = "https://hoodi.infura.io/v3/fa0159b5f0b940e4adb806069b1fb3de";
  }

  const backendContent = Object.entries(backendEnv)
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");

  fs.writeFileSync(backendEnvPath, backendContent);
  console.log(`Updated ${backendEnvPath}`);

  // Update Frontend .env.local
  const frontendEnv = readEnv(frontendEnvPath);
  frontendEnv["NEXT_PUBLIC_POLL_FACTORY_ADDRESS"] = factoryAddress;
  frontendEnv["NEXT_PUBLIC_ELIGIBILITY_AGGREGATOR_ADDRESS"] = aggregatorAddress;
  frontendEnv["NEXT_PUBLIC_MOCK_SEMAPHORE_VERIFIER_ADDRESS"] = verifierAddress;
  frontendEnv["NEXT_PUBLIC_FORWARDER_ADDRESS"] = forwarderAddress;
  frontendEnv["NEXT_PUBLIC_RELAYER_URL"] = "http://localhost:4000"; // Relayer is local, but points to Hoodi
  frontendEnv["NEXT_PUBLIC_RPC_URL"] = "https://hoodi.infura.io/v3/fa0159b5f0b940e4adb806069b1fb3de";

  const frontendContent = Object.entries(frontendEnv)
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");

  fs.writeFileSync(frontendEnvPath, frontendContent);
  console.log(`Updated ${frontendEnvPath}`);
  console.log("----------------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
