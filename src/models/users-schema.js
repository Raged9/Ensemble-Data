const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  fullName: String,
});

const Users = mongoose.model('Users', userSchema);

module.exports = { Users };
