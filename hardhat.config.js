require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const credentials = require("./credentials.js");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${credentials.alchemyRinkeby}`,
      accounts: [credentials.privateKey],
    },
    kovan: {
      url: `https://eth-kovan.alchemyapi.io/v2/${credentials.alchemyKovan}`,
      accounts: [credentials.privateKey],
    },

    avalanche: {
      url: `https://speedy-nodes-nyc.moralis.io/${credentials.moralis}/avalanche/mainnet`,
      accounts: [credentials.privateKey],
    },
    avalancheFujiTestnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${credentials.moralis}/avalanche/testnet`,
      accounts: [credentials.privateKey],
    },

    local: {
      url: `http://127.0.0.1:8545/`,
      accounts: [credentials.privateKey],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: credentials.etherscan,
      ropsten: credentials.etherscan,
      rinkeby: credentials.etherscan,
      goerli: credentials.etherscan,
      kovan: credentials.etherscan,
      avalanche: credentials.snowtrace,
    },
  },
};
