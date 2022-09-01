const ethers = require("ethers");
const fs = require("fs-extra");

const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider("");
    const wallet = new ethers.wallet("", provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    const contract = await contractFactory.deploy();
}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1); 
});