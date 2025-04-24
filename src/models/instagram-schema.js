const mongoose = require('mongoose');

const instagramSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  follower: String,
});

const instagram = mongoose.model('Instagram', instagramSchema);

module.exports = { instagram };
