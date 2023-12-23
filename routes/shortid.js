// routes/shortidRoute.js
const express = require('express');
const router = express.Router();
const { handlegetShortId } = require('../controller/shortid');

router.get("/:shortId", handlegetShortId);

module.exports = router;
