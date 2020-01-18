const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Request caught in routes/index.js");
});

module.exports = router;

