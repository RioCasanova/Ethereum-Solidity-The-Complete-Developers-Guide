const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");
const provider = new HDWalletProvider(
  "work arrange bounce dog stay vintage finger replace glide pill skirt brother",
  "https://sepolia.infura.io/v3/98215e392e154b0a928705e8b96255b9"
);
const web3 = new Web3(provider);
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to ", result.options.address);
  provider.engine.stop();
};
deploy();
