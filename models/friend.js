const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const FriendSchema = new Schema({
  name: {
    type: String,
    required: true,
    match: [/^[a-zA-Z]+$/, 'is invalid'],
  }
});

const friend = mongoose.model("friend", FriendSchema);
module.exports = friend
