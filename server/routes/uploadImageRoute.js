const express= require('express');
const router= express.Router();
const {uploadImageController}= require('../controllers/uploadImageController');
const {uploadUserImage}= require('../middleware/multer')

router.post('/uploadImage',uploadUserImage, uploadImageController);

module.exports=router;