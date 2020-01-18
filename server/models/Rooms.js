const mongoose = require('mongoose');

const { Schema } = mongoose;

const RoomSchema = new Schema({
  roomID: String,
  roomName: String,
  roomBalance: Number,
  roomOwnerEmail: String,
  createdAt: Date,
  roomParticipants: {
    email: String,
    hasPaid: Boolean,
    amountContributed: Number
  } 
});


module.exports = mongoose.model('Rooms', RoomSchema, 'Rooms');