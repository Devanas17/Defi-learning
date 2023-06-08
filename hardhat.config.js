require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.18",
  solidity: {
    compilers: [
      {
          version: "0.8.18",
      },
      {
          version: "0.8.10",
      },
  ],
  }
};
