
const hre = require("hardhat");

async function main() {
    const PoolAddressProvider = "0x0496275d34753A48320CA58103d5220d394FF77F";

    const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");
    const flashLoan = await FlashLoan.deploy(PoolAddressProvider, {gasLimit: 5000000})
    await flashLoan.deployed();

    console.log("FlashLoan Deployed on: ➡", flashLoan.address );


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


