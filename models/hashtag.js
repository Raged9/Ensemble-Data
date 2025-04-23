const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
  name: String,
  usageCount: Number
});

module.exports = mongoose.model('Hashtag', hashtagSchema);
