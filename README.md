# Anonymous Polling System (Hoodi Testnet)

A privacy-preserving polling application built on Ethereum (Hoodi Testnet). It uses **Meta-Transactions** to allow anonymous voting without revealing the voter's identity on-chain, and **Mock Zero-Knowledge Proofs** for eligibility verification.

## Features
-   **Anonymous Voting**: Voters sign a message off-chain; a Relayer submits the transaction.
-   **Gasless Voting**: The Relayer pays the gas fees for voting.
-   **Sybil Resistance**: Ensures each address can only vote once per poll using nullifiers.
-   **Real-time Results**: View poll tallies directly from the blockchain.

## Prerequisites
-   **Node.js** (v18+)
-   **MetaMask** installed in your browser.
-   **Hoodi Testnet ETH**: You need ETH in your account to create polls (voting is free for the user).

## Project Structure
-   `contracts/`: Solidity smart contracts (`AnonPoll`, `PollFactory`, `SimpleForwarder`).
-   `relayer/`: Node.js server that relays meta-transactions.
-   `ui/`: Next.js frontend application.
-   `scripts/`: Deployment scripts.

## Installation

1.  **Install Root Dependencies** (Hardhat & Relayer):
    ```bash
    npm install
    cd relayer && npm install && cd ..
    ```

2.  **Install Frontend Dependencies**:
    ```bash
    cd ui
    npm install
    cd ..
    ```

## Configuration

You need to configure environment variables for both the backend (contracts/relayer) and frontend.

### 1. Root `.env` (`contracts/.env`)
Create a `.env` file in the root directory:
```ini
# Your Infura API Key
INFURA_API_KEY=your_infura_key

# Private Key for deploying contracts (Must have Hoodi ETH)
HOODI_PRIVATE_KEY=your_private_key

# Private Key for the Relayer (Must have Hoodi ETH to pay for votes)
# Can be the same as HOODI_PRIVATE_KEY for testing
RELAYER_PK=your_private_key

# RPC URL for Hoodi
RPC_URL=https://hoodi.infura.io/v3/your_infura_key

# These will be auto-filled by the deployment script
FORWARDER_ADDRESS=
VERIFIER_ADDRESS=
```

### 2. Frontend `.env.local` (`contracts/ui/.env.local`)
Create a `.env.local` file in the `ui/` directory:
```ini
NEXT_PUBLIC_RPC_URL=https://hoodi.infura.io/v3/your_infura_key
NEXT_PUBLIC_RELAYER_URL=http://localhost:4000

# These will be auto-filled by the deployment script
NEXT_PUBLIC_POLL_FACTORY_ADDRESS=
NEXT_PUBLIC_ELIGIBILITY_AGGREGATOR_ADDRESS=
NEXT_PUBLIC_MOCK_SEMAPHORE_VERIFIER_ADDRESS=
NEXT_PUBLIC_FORWARDER_ADDRESS=
```

## Deployment

Deploy the contracts to the Hoodi testnet. This script will **automatically update** your `.env` files with the new contract addresses.

```bash
npx hardhat run scripts/deploy.js --network hoodi
```

## Running the Application

You need to run the Relayer and the Frontend simultaneously.

### 1. Start the Relayer
The relayer listens for signed vote messages and submits them to the blockchain.
```bash
# From the root 'contracts' directory
node relayer/server.js
```
*Output should say: `Relayer listening on port 4000`*

### 2. Start the Frontend
```bash
# From the 'contracts/ui' directory
cd ui
npm run dev
```
*Open [http://localhost:3000](http://localhost:3000) in your browser.*

## Usage Guide

1.  **Connect Wallet**: Click "Connect Wallet" in the top right.
    *   **Network Switch**: The app will automatically prompt you to switch to **Hoodi Testnet** (Sepolia) if you are on the wrong network.
2.  **Create Poll**:
    *   Enter a question (e.g., "What is your favorite color?").
    *   Set options count and duration.
    *   Click "Create Poll" and confirm the transaction in MetaMask.
3.  **Vote**:
    *   Click on a poll to view details.
    *   Select an option.
    *   Click "Submit Vote".
    *   **Sign Message**: MetaMask will ask you to sign a message. This is **free** (no gas) and does not reveal your identity on-chain.
    *   The Relayer will submit your vote. Wait for the "Vote submitted!" alert.

## Troubleshooting

-   **"Insufficient funds for intrinsic transaction cost" (Relayer)**:
    *   The `RELAYER_PK` account has 0 ETH. Send some Hoodi ETH to the address printed in the relayer console, or use your funded deployer key as the `RELAYER_PK`.
-   **"User denied transaction signature"**:
    *   Ensure you are clicking "Sign" in MetaMask.
    *   If creating a poll, ensure you confirm the transaction.
-   **"Wrong chainId"**:
    *   Ensure your `.env` files have the correct `RPC_URL` pointing to Hoodi (Sepolia).
    *   Restart the Relayer and Frontend after changing `.env` files.
