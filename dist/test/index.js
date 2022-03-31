"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("Token", function () {
    it("Should deploy correctly", async function () {
        let [addr1, addr2, ...addrs] = await hardhat_1.ethers.getSigners();
        const TokenFactory = await hardhat_1.ethers.getContractFactory("BurgerToken");
        const Token = await TokenFactory.deploy("BurgerToken", "BURGER", 100000);
        await Token.deployed();
        (0, chai_1.expect)(await Token.balanceOf(addr1.address)).to.equal(100000);
    });
});
describe("NFT", function () {
    it("Should be able to mint NFT", async function () {
        let [addr1, addr2, ...addrs] = await hardhat_1.ethers.getSigners();
        const TokenFactory = await hardhat_1.ethers.getContractFactory("BurgerToken");
        const Token = await TokenFactory.deploy("BurgerToken", "BURGER", 100000);
        const NFTFactory = await hardhat_1.ethers.getContractFactory("BurgerNFT");
        const NFT = await NFTFactory.deploy();
        let NFTtx = await NFT.safeMint(addr1.address);
        (0, chai_1.expect)(await NFT._tokenIdCounter()).to.equal(1);
    });
});
