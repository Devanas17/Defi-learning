const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("TestCompoundErc20", () => {
    let owner;
    let user;
    let testCompoundErc20;

    beforeEach(async () => {
        [owner, user] = await ethers.getSigners();

        const TestCompoundErc20 = await ethers.getContractFactory("TestCompoundErc20");
        testCompoundErc20 = await Token.deploy(await owner.address, await user.address);

        await testCompoundErc20.deployed();

    });


})