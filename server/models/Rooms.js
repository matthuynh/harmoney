const mongoose = require("mongoose");
const user = require('./Users')
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
	participants: [{amountOwed:Number, user:String}]
});

module.exports = mongoose.model("Rooms", RoomSchema, "Rooms");
