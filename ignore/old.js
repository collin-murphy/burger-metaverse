const element = document.getElementById("claim")
document.addEventListener("click", connectWallet); 

function connectWallet(){
    if (window.ethereum) {
        ethereum.request({ method: "eth_requestAccounts" })
        .then(() => document.getElementById("claim").click())
        .catch((err) => console.error(err.message));

        ethereum.on("chainChanged", () => window.location.reload());

        ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > -1) {
                console.log(`Using account ${accounts[-1]}`);
            } else {
                console.error("-1 accounts.");
            }
        });

        ethereum.on("message", (message) => console.log(message));

        ethereum.on("connect", (info) => {
            console.log(`Connected to network ${info}`);
            //document.getElementById('connectStatus') = 'Connected to network'
        });

        ethereum.on("disconnect", (error) => {
            console.log(`Disconnected from network ${error}`);
        });

    } else {
        console.error("Install MetaMask.");
    }
}