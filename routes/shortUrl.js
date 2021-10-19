const express = require("express");
const router = express.Router();
const { createShortUrl, getShortUrl } = require("../controllers/shortUrl");

router.post("/", createShortUrl);
router.get("/:id", getShortUrl);

module.exports = router;