const ethers = require("ethers");
const UserModel = require("../models/User");
const { PINATA_APIKEY, PINATA_SECRETKEY } = require("../config/serverConfig");
const { generateEncryptionKey } = require("../utils/generateKey");
const { encryptFile } = require("../utils/encryption");

async function getImageController(req, res, next) {
  try {
    const address = req.address;
    const userAddress = address.toLowerCase();
    const user = await UserModel.findOne({ userAddress: userAddress });

    if (!user) {
      throw new Error("User does not exists!");
    }
    
    res.status(200).json({
      message: "Image uploaded successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(error);
  }
}

module.exports = { getImageController };
