const mongoose = require('mongoose');

const youtubeSchema = new mongoose.Schema({
  channelId: { type: String, required: true, unique: true },
  subscriberCount: { type: Number, required: true },
  username: { type: String, required: true, unique: true },
});

const Youtube = mongoose.model('Youtube', youtubeSchema);

module.exports = { Youtube };
