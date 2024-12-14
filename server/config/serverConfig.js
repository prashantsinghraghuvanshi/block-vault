require('dotenv').config()

module.exports={
    MONGODB_URL: process.env.MONGODB_URL,
    PORT: process.env.PORT || 3000,
    // JWT_KEY: process.env.JWT_KEY
    PINATA_APIKEY: process.env.PINATA_APIKEY,
    PINATA_SECRETKEY: process.env.PINATA_SECRETKEY,
    PINATA_JWT: process.env.PINATA_JWT
}