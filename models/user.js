const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  platform: String,
  followers: Number,
  bio: String
});

module.exports = mongoose.model('User', userSchema);
