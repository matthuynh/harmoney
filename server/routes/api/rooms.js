const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const auth = require("../auth");
const Rooms = require("../../models/Rooms");

/**
 * @route         GET /create
 * @description   A user can create a room. The user must include their user id when sending the request.
 * From the req, we can get the user id. Create a room and associate it with that user id. Assign an id
 * to this new room. Return the room idÍ.
 * 
 * The user must be authenticated to use this route
 */
router.get("/create", auth.required, async (req, res, next) => {
    console.log("Hit the /create route");

    // Generate a room ID
    let roomID, roomIDExists;
    do {
        roomID = shortID.generate();
        roomIDExists = await Rooms.findOne({ roomID });
      } while(roomIDExists);
});


/**
 * @route         GET /join
 * @description   
 * 
 * The user must be authenticated to use this route
 */
router.get("/join", auth.required, (req, res, next) => {
    console.log("Hit the /join route");
});


/**
 * @route         GET /pay
 * @description   
 * 
 * The user must be authenticated to use this route
 */
router.get("/pay", auth.required, (req, res, next) => {
    console.log("Hit the /pay route");
});
module.exports = router;
