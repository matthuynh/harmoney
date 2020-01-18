const mongoose = require("mongoose");
const express = require("express");
const shortID = require('shortid');
const router = express.Router();
const auth = require("../auth");
const Rooms = require("../../models/Rooms");

/**
 * @route         GET /create
 * @description   A user can create a room. The user must include their user id when sending the request.
 *                From the req, we can get the user id. Create a room and associate it with that user id. Assign an id
 *                to this new room. Return the room idÍ.
 *
 * The user must be authenticated to use this route
 */
router.post("/create", auth.required, async (req, res, next) => {
	console.log("Hit the /create route");

	try {
		const {
			body: { room }
    } = req;
    
    console.log(room);
    
    let roomBalance = room.roomBalance,
      roomName = room.roomName,
			firstName = room.ownerFirstName,
			lastName = room.ownerLastName,
			email = room.ownerEmail;
		let participants = []; // room participants is initially empty

		// User did not fill in all fields
		if (
			!(
        room.roomBalance &&
        room.roomName &&
				room.ownerFirstName &&
				room.ownerLastName &&
				room.ownerEmail
			)
		) {
			return res.status(400).json({
				errorMessage: "You are missing some fields. Please enter all user information"
			});
		}

		// Generate a room ID
		let roomID, roomIDExists;
		do {
			roomID = shortID.generate();
			roomIDExists = await Rooms.findOne({ roomID });
		} while (roomIDExists);

		// Create and insert the document into Mongo
		roomToInsert = new Rooms({
			roomID,
			roomName,
			roomBalance,
			roomOwner: {
				firstName,
				lastName,
				email
			},
			createdAt: new Date().toISOString(),
			roomParticipants: {
				participants
			}
		});
		await roomToInsert.save();

		// Return the roomID for the user
		res.json({ roomID: roomID });
  } 
  // Error
  catch (err) {
		console.error(err);
		return res.status(500).json({
			errorMessage: "Server error. Likely something wrong with Mongo"
		});
	}
});

/**
 * @route         GET /join
 * @description   Users can join a pre-existing Room
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
