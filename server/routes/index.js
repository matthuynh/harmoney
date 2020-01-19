const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Request caught in routes/index.js");
});

router.use('/api', require('./api'));

module.exports = router;

