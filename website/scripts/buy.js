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



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connect_button").addEventListener("click", async () => {
        const web3 = await getWeb3()
        const walletAddress = await web3.eth.requestAccounts()
        const walletBalanceInWei = await web3.eth.getBalance(walletAddress[0])
        console.log(walletBalanceInWei)
        document.getElementById("connectStatus").innerHTML = `Your wallet address is ${walletAddress[0]}<br>
        Your balance is ${walletBalanceInWei} Wei`
        })
   
})