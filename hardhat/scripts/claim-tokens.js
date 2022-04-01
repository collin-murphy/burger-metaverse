require("dotenv").config()
//const { detectEthereumProvider } = require("@metamask/detect-provider")
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const { detectEthereumProvider } = require("@metamask/detect-provider")
const { ethers } = require("hardhat")
//const web3 = createAlchemyWeb3(API_URL)
//const provider = await detectEthereumProvider()

const getWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum)

        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            resolve(web3)
        } catch (error) {
            reject(error)
        }
    })
}

const contract = require("../artifacts/contracts/BurgerToken.sol/BurgerToken.json")
const contractAddress = "0x12baf896853E757FFFBDdf6AB5cecb31853CBE56"//UPDATE

async function claimTokens() {
  const web3 = await getWeb3();
  const tokenContract = new web3.eth.Contract(contract.abi, contractAddress)
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //let connectRequest = ethereum.on("connect", "0x3")
  //the transaction

  const account = await getCurrentAccount();
  const doMethod = await tokenContract.methods.claim().send({ from: account , value: ethers.utils.parseEther('1.0')});

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
