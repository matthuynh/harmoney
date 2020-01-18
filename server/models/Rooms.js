const mongoose = require("mongoose");

const { Schema } = mongoose;

// TODO: Use Populate to reference User documents (don't need to re-create data)
// https://mongoosejs.com/docs/populate.html

const RoomSchema = new Schema({
	roomID: String,
	roomName: String,
	roomBalance: Number,
	roomOwner: {
		firstName: String,
		lastName: String,
		email: String
	},
	createdAt: Date,
	roomParticipants: [{
		email: String,
		hasPaid: Boolean,
		amountContributed: Number
	}]
});

module.exports = mongoose.model("Rooms", RoomSchema, "Rooms");
