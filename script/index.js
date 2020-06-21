const dswitch = artifacts.require("Dswitch");
var Web3 = require('web3');
const url = "http://127.0.0.1:7545";
var web3 = new Web3(new Web3.providers.HttpProvider(url));
const publicKey = "0x253fc6c11f910918fa07c20c80c8924fa7fde4ee";


async function execute() {
  contract1 = await dswitch.deployed();
  var res = await contract1.still_active();
  console.log(res);
  return res;
}


module.exports = async function (callback) {
  try {
    await execute()
  } catch (e) {
    console.log(e)
  }
  callback()
}




