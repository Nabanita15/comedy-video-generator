const express = require("express");
const { generateComedyVideo } = require("../controllers/comedyController");
const router = express.Router();

router.post("/generate-video", generateComedyVideo);

module.exports = router;
