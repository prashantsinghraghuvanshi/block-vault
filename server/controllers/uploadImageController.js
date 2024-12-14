const ethers = require('ethers');
const UserModel = require('../models/User');
const { PINATA_APIKEY, PINATA_SECRETKEY } = require('../config/serverConfig');
const {generateEncryptionKey}=require('../utils/generateKey');
const {encryptFile}= require('../utils/encryption');

async function uploadImageController(req, res, next) {
    try {
        const adddress = "0xC269204F1C278a71F7003BC77379B304F7c210Dc";
        const userAdddress= adddress.toLowerCase();
        const user= await UserModel.findOne({userAddress: userAdddress});
        if(!user){
            throw new Error("User does not exists!");
        }
        if(user.encryptionKey===null){
            const encryptionKey=generateEncryptionKey(32);
            user.encryptionKey=encryptionKey;
            await user.save();
        }

        const {encryptedData, iv}=encryptFile(req.file.buffer, user.encryptionKey);

        console.log(encryptedData);

        const pinataSDK = require('@pinata/sdk');
        const pinata = new pinataSDK({
            pinataApiKey: PINATA_APIKEY,
            pinataSecretApiKey: PINATA_SECRETKEY,
        });
        res.status(200).json({message: "Image uploaded successfully!"});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
        console.error(error);
    }
}

module.exports = { uploadImageController };
