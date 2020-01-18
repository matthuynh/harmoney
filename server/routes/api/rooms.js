const express = require("express");
const router = express.Router();
const passport = require("passport");
const auth = require("../auth");

/**
 * @route         GET /create
 * @description   A user can create a room. The user must include their user id when sending the request.
 * From the req, we can get the user id. Create a room and associate it with that user id. Assign an id
 * to this new room. Return the room idÍ.
 * 
 * The user must be authenticated to use this route
 */
router.get("/create", auth.required, (req, res, next) => {
    console.log("Hit the /create route");
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
