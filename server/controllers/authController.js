const ethers=require('ethers');

async function authController(req, res, next) {
    try {
        const {signature} = req.body;
        const {address}=req.query;

        if(!signature){
            throw new Error("signature is invalid");
        }

        const recoveredAddress= ethers.utils.verifyMessage("Welcome to Block Vault Website.",signature);

        if(address.toLowerCase()===recoveredAddress.toLowerCase()){
            res.status(200).json({message: "Authentication Successfull."});
        } else {
            res.status(400).json({message: "Authentication Failed."});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }

}

module.exports={authController};