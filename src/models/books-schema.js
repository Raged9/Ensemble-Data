const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
  title : String,
});

const Books = mongoose.model('Books', booksSchema);

module.exports = { Books };