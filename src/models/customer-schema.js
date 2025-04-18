const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  date: Date,
  tiktok: String,
  instagram: String,
  reddit: String,
  youtube: String,
  twitch: String,
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = { Customer };
