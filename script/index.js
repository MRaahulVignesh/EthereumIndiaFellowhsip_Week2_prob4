const dswitch = artifacts.require("Dswitch");
var Web3 = require('web3');
const url = "http://127.0.0.1:7545";
var web3 = new Web3(new Web3.providers.HttpProvider(url));
const publicKey = "0x253fc6c11f910918fa07c20c80c8924fa7fde4ee";

const abi = [
    {
      "inputs": [
        {
          "name": "pAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "status",
          "type": "string"
        }
      ],
      "name": "StillActive",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "still_active",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "transfer",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ]
const address = "0xe92f1A308661BD34050C36E569F60946E992B8BC";
// method hardcoding the abi and contract address
var contract = new web3.eth.Contract(abi, address);
var res = contract.methods.still_active().call();
console.log(res);

// using truffle directly
// const contract1 = async () => {
//         contract1 = await dswitch.deployed();
//         var res = contract1.methods.still_active().call();
//         console.log(res);
//         return res;
//        }

// subscribing to events

// dswitch.events.StillActive({
//     fromBlock: latest
// }).on("data", function(event){
//     console.log(event.blockNumber);
// });



