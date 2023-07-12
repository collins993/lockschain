require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/8kobJZ4ITx3MM5ohPQgxEUUIFRPLZgjl',
      accounts: ['2f6bc7538e4539cf8c144f827aed442aeca65da7fe78237129ee2899641a98ad'],
    },
  },
};

