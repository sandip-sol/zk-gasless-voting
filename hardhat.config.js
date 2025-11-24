require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

require("dotenv").config();
const INFURA_API = process.env.INFURA_API_KEY;
const HOODI_PRIVATE = process.env.HOODI_PRIVATE_KEY;


// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and add it to the configuration variables
// const INFURA_API_KEY = vars.get("fa0159b5f0b940e4adb806069b1fb3de");

// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
// const SEPOLIA_PRIVATE_KEY = vars.get("22e7cc4a6d077b4a87cf0e0a492f4f67d77450a0bfac4fbf59747caa6d45cb43");

module.exports = {
  solidity: "0.8.28",
  networks: {
    hoodi: {
      url: `https://hoodi.infura.io/v3/${INFURA_API}`,
      accounts: [HOODI_PRIVATE],
    },
  },

};