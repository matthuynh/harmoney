const mongoose = require("mongoose");
const express = require("express");
const shortID = require('shortid');
const router = express.Router();
const auth = require("../auth");
const Rooms = require("../../models/Rooms");
const Users = require("../../models/Users");
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
		){
			return res.status(400).json({ errorMessage: "You are missing some fields. Please enter all user information" });
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
router.post("/join", auth.required, async (req, res, next) => {
  console.log("Hit the /join route");
  
  //I need the room number, and userId
  try{
    let { roomID } = req.body;

    user = await Users.findById(req.body.user._id);

    room = await Rooms.findOne({ roomID });
    if(!room){
      res.status(404).json({error:"Room doesn't exist"});
    }

    console.log(user);
    user.roomIDs.push({id: roomID});
    user.markModified('roomIDs');
    await user.save();
    newVal = (room.roomBalance / (room.participants.length + 1)).toFixed(2)
    for(i=0; i<room.participants.length; i++){
      if(room.participants[i].user == req.body.user._id){
        res.status(405).json({error: "Already in the room!"})
      }
    }
    room.participants.push({amountOwed: newVal, user:req.body.user._id})
    for(i=0; i < room.participants.length; i++){
      room.participants[i].amountOwed = newVal;
    }
    room.markModified('participants');
    await room.save((err)=>{
      console.log(err)
    });
    res.status(200).json(room);
  }
  
  catch (err) {
    console.error(err);
    return res.status(500).json({
      errorMessage: "Server error. Likely something wrong with Mongo"
    });
	}
});

/**
 * @route         GET /pay
 * @description
 *
 * The user must be authenticated to use this route
 */
router.post("/pay", auth.required, async (req, res, next) => {

	console.log("Hit the /join route");
  
  //I need the room number, and userId
  try{
    let { roomID } = req.body;
    user = await Users.findById(req.body.user._id);
    room = await Rooms.findOne({ roomID });

    
    let { email } = room.roomOwner;
    let owner = await Users.findOne({ email });

    let saver;
    for(i=0; i < room.participants.length; i++){
      if(room.participants[i].user == user._id){
        if(user.accountBalance < room.participants[i][0]){
          return res.status(404).json({error: "insufficient balance"});
        }
        else{
          saver = room.participants[i].amountOwed;
          room.participants[i].amountOwed = 0;
          room.roomBalance -= saver;
          room.markModified('participants');
          room.markModified('roomBalance');
          await room.save((err) => {
            console.log(err);
          })
          
        }
        
      }
    }

    owner.accountBalance += saver;
    owner.markModified('accountBalance')
    await owner.save((err) => {
      console.log(err);
    });

    user.accountBalance -= saver;
    user.markModified('accountBalance')
    await user.save((err) => {
      console.log(err);
    });

    res.status(200).send(room);
  }
  
  catch (err) {
    console.error(err);
    return res.status(500).json({
      errorMessage: "Server error. Likely something wrong with Mongo"
    });
	}
});
module.exports = router;
