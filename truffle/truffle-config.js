require('dotenv').config();

module.exports = {
  contracts_build_directory: "../client/src/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    // loc_dev_dev: {
    //   network_id: "*",
    //   port: 8545,
    //   host: "127.0.0.1"
    // },
    // loc_development_development: {
    //   network_id: "*",
    //   port: 8546,
    //   host: "127.0.0.1"
    // }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.14"
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_key: {
    etherscan: process.env["ETHERSCAN_API_KEY"]
  }
};
