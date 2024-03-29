"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const config_1 = require("hardhat/config");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@typechain/hardhat");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-tracer");
dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
(0, config_1.task)("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
    for (const account of accounts) {
        console.log(account.address);
    }
});
const { API_URL, PRIVATE_KEY } = process.env;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config = {
    solidity: "0.8.11",
    networks: {
        hardhat: {},
        testnet: {
            url: API_URL,
            chainId: 97,
            gasPrice: "auto",
            accounts: ['c2a948718a3ad39b33f70d833eec930cf5f0a735a823f683b33f5370aef9454a']
        },
        ropsten: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        },
    },
    /*
    gasReporter: {
      enabled: process.env.REPORT_GAS !== undefined,
      currency: "USD",
    },
    */
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};
exports.default = config;
