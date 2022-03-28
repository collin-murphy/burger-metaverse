const getWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum)

        try{
            await window.ethereum.request({method:"eth_requestAccounts"})
         resolve(web3)
        } catch(error){
            reject(error)
        }
    })   
}

function removeElement(element){
    var elem = document.getElementById(element)
    elem.parentNode.removeChild(elem)
    return false;
}
function addButtonFunction(element){
    document.getElementById(element).innerHTML = '<button class = \'button\' id ="claimButton">Claim</button></span>'
    }
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectButton").addEventListener("click", async () => {
        removeElement("connectButton")
        addButtonFunction("buttonChange")
        
        const web3 = await getWeb3()
        const walletAddress = await web3.eth.requestAccounts()
        const walletAddressString = walletAddress[0].split('0x')[1]
        const walletBalanceInWei = await web3.eth.getBalance(walletAddress[0])
        var header = document.getElementById("header")
        var status = document.getElementById("connectStatus")
         
        header.innerHTML = 'Wallet connected'
        status.innerHTML = `Your wallet address is ${walletAddressString}<br>
        Your balance is ${walletBalanceInWei} Wei`
        document.getElementById("claimButton").addEventListener("click", async () => {
            removeElement('claimButton')
            removeElement('connectStatus')
            header.innerHTML = `10 burger coins put in wallet ${walletAddressString}`
        })
    })
      
    
})
