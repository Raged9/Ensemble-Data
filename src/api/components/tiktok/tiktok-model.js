const mongoose = require('mongoose');

const tiktokSchema = new mongoose.Schema({
  username: { type: String, required: true },
  follower: { type: Number, required: true },
  following: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('TiktokData', tiktokSchema);