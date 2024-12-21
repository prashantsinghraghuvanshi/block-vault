const express = require("express");
const router = express.Router();
const { authToken } = require("../middleware/authToken");
const { getImageController } = require("../controllers/getImageController");

router.post("/getImage",authToken, getImageController);

module.exports = router;