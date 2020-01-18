const express = require("express");
const router = express.Router();

/**
 * @route         GET /create
 * @description   A user can create a room. The user must include their user id when sending the request.
 * From the req, we can get the user id. Create a room and associate it with that user id. Assign an id
 * to this new room. Return the room idÍ.
 */
router.get("/create", async (req, res) => {

});

module.exports = router;
