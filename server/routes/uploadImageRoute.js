const express = require("express");
const router = express.Router();
const {
  uploadImageController,
} = require("../controllers/uploadImageController");
const { uploadUserImage } = require("../middleware/multer");
const { authToken } = require("../middleware/authToken");

router.post("/uploadImage", authToken, uploadUserImage, uploadImageController);

module.exports = router;
