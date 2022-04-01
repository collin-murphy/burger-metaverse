require("dotenv").config()
//const { detectEthereumProvider } = require("@metamask/detect-provider")
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const { detectEthereumProvider } = require("@metamask/detect-provider")
const { ethers } = require("hardhat")
require("@nomiclabs/hardhat-web3");
const Web3 = require('web3');
var currentProvider = new Web3.providers.HttpProvider('http://localhost:8545');
let web3 = new Web3(currentProvider);

const contract = require("../artifacts/contracts/BurgerToken.sol/BurgerToken.json")
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"//UPDATE

async function claimTokens() {
  //let [wallet] = ethers.getSigners();
  var currentProvider = new Web3.providers.HttpProvider('http://localhost:8545');

  //const web3 = await getWeb3();
  const tokenContract = new web3.eth.Contract(contract.abi, contractAddress)
  //const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //let connectRequest = ethereum.on("connect", "0x3")
  //the transaction

  //const account = await getCurrentAccount();
  var acc = web3.currentProvider.selectedAddress;
  console.log("current address: " + acc);
  const doMethod = await tokenContract.methods.claim().send({from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', value: ethers.utils.parseEther('1.0')});

  /*
  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY)
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash
            )
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            )
          }
        }
      )
    })
    .catch((err) => {
      console.log("Promise failed:", err)
    })
    */
}

claimTokens()
