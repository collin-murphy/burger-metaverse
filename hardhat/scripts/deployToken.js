async function main() {
  let TestTokenFactory = await ethers.getContractFactory("BurgerCoin");
  let TestToken = await TestTokenFactory.deploy("BurgerCoin", 'BURGER', '100000000000000000000000');
  await TestToken.deployed();
  console.log("BurgerCoin deployed to:", TestToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  