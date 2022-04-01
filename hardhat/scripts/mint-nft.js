require("dotenv").config()
//const { detectEthereumProvider } = require("@metamask/detect-provider")
const TOKEN_URI = "https://gateway.pinata.cloud/ipfs/QmdpgdDsuU3E2H57nych8WJHxF47HBB6FhaCKz56u5K5ps"
const API_URL = process.env.API_URL
const PUBLIC_KEY = process.env.PUBLIC_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
const { detectEthereumProvider } = require("@metamask/detect-provider")
const web3 = createAlchemyWeb3(API_URL)
const provider = await detectEthereumProvider()

const contract = require("../artifacts/contracts/NFT.sol/BurgerNFT.json")
const contractAddress = "0x0Aa98f27D3a874603A1CC0ccF66EAb1fEC0e12f4"
const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

async function mintNFT() {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce

  //let connectRequest = ethereum.on("connect", "0x3")
  //the transaction
  const tx = {
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: window.nftContract.methods.mintNFT(PUBLIC_KEY, TOKEN_URI).encodeABI(),
  }

  const account = await getCurrentAccount();
  const doMethod = await nftContract.methods.mintNFT(account.address, TOKEN_URI).send({ from: account });

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
  


//mintNFT()
