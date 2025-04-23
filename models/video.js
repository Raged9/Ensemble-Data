const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  url: String,
  description: String,
  duration: Number,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', videoSchema);
