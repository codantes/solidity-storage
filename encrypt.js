const { ethers } = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

const encrypt = async () => {
    const wallet = new ethers(process.env.PRIVATE_KEY);
    const encryptedJsonKey = await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
        process.env.PRIVATE_KEY
    );
    fs.writeFileSync('./encryptedKey.json', encryptedJsonKey);
}

encrypt().then(() => process.exit(0)).catch((error)=>{
    console.log(error);
    process.exit(1);
})