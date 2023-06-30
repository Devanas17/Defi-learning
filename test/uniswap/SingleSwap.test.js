const {expect} = require("chai");
const { ethers } = require("hardhat");

describe("SingleSwap", () => {
    let singleSwap;

    const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    const LINK = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
    const SWAPROUTER = "0xE592427A0AEce92De3Edee1F18E0157C05861564";

    beforeEach(async() => {
        const SingleSwap = await ethers.getContractFactory("SingleSwap");
        singleSwap = await SingleSwap.deploy(SWAPROUTER);
        await singleSwap.deployed();
    })

    describe("Swapping", () => {
        it("should swap exact input single", async() => {

        });
    });
})