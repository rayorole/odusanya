const Web3 = require('web3');
const web3 = new Web3('ws://127.0.0.1:8545');

const main = async () => {
  const [deployer, sniper] = await web3.eth.getAccounts();

  console.log('Block height:', await web3.eth.getBlockNumber());
};

main();
