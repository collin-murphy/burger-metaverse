import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token", function () {
  it("Should deploy correctly", async function () {
    let [addr1, addr2, ...addrs] = await ethers.getSigners();

    const TokenFactory = await ethers.getContractFactory("BurgerToken");
    const Token = await TokenFactory.deploy("BurgerToken", "BURGER", 100000);
    await Token.deployed();

    expect(await Token.balanceOf(addr1.address)).to.equal(100000);
  });
});

describe("NFT", function () {
  it("Should be able to mint NFT", async function () {
    let [addr1, addr2, ...addrs] = await ethers.getSigners();

    const TokenFactory = await ethers.getContractFactory("BurgerToken");
    const Token = await TokenFactory.deploy("BurgerToken", "BURGER", 100000);
    const NFTFactory = await ethers.getContractFactory("BurgerNFT");
    const NFT = await NFTFactory.deploy();

    let NFTtx = await NFT.safeMint(addr1.address);

    expect(await NFT._tokenIdCounter()).to.equal(1);
  });
});
