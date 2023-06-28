/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337 // Local network ID
    }
  },
  solidity: {
    version: "0.8.0" // Solidity compiler version
  }
};
