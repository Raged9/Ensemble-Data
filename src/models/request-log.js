const mongoose = require('mongoose');

const requestLogSchema = new mongoose.Schema({
  endpoint: String,
  query: Object,
  response: Object,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RequestLog', requestLogSchema);