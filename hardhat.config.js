require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xb0c06eec1a5f26ebd81d899d308cd3a4e0b16d9de70ef072b6ad504a471e0f5b"], //Your private key starting with "0x"
    },
  },
};
