const address = ""

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

function removeElement(element) {
    var elem = document.getElementById(element)
    elem.parentNode.removeChild(elem)
    return false;
}
function addButtonFunction(element) {
    document.getElementById(element).innerHTML = '<button class = \'button\' id ="claimButton">Claim</button></span>'
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectButton").addEventListener("click", async () => {
        removeElement("connectButton")
        const web3 = await getWeb3()
        //const web3 = new Web3('https://speedy-nodes-nyc.moralis.io/dc36e5cdc03c5c020090a0e8/eth/ropsten');

        //switch networks
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: '0x3' }],
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: '0x3',
                                chainName: 'ropsten',
                                rpcUrls: ['https://speedy-nodes-nyc.moralis.io/dc36e5cdc03c5c020090a0e8/eth/ropsten'] /* ... */,
                            },
                        ],
                    });
                } catch (addError) {
                    // handle "add" error
                }
            }
            // handle other "switch" errors
        }
 

        //get all of the information from the wallet
        var currentChain = await web3.eth.getChainId()
        if(currentChain == 3){
            currentChain = 'ropsten'
        } else {
            currentChain= `Chain 0x${currentChainId}`
        }
        const walletAddress = await web3.eth.requestAccounts()
        web3.eth.getNodeInfo().then(console.log)
        const walletAddressString = walletAddress[0]
        const walletBalanceInWei = await web3.eth.getBalance(walletAddress[0])
        var header = document.getElementById("header")
        var info = document.getElementById("connectStatus")

        addButtonFunction("buttonChange")
        header.innerHTML = 'Wallet connected'
        info.innerHTML = `Your wallet address is ${walletAddressString}<br>
        Your balance is ${walletBalanceInWei} Wei<br>
        You are connected to ${currentChain}`

        document.getElementById("claimButton").addEventListener("click", async () => {
            removeElement('claimButton')
            removeElement('connectStatus')
            header.innerHTML = `10 burger coins put in wallet ${walletAddressString}`

            console.log("sneed")
        })


    })
});
