const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  title : String,
});

const Users = mongoose.model('Books', booksSchema);

module.exports = { Books };