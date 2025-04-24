const mongoose = require('mongoose');

const twitchSchema = new mongoose.Schema({
  data: String,   
  videos: String, 
  count: String   
});

const twitch = mongoose.model('twitch', twitchSchema);

module.exports = { twitch };