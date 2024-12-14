const crypto= require('crypto');

const generateEncryptionKey=(length)=>{
    return crypto.randomBytes(length/2).toString('hex');
}

module.exports={generateEncryptionKey};