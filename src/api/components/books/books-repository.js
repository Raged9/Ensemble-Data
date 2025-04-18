const { Books } = require('/Users/Arya/Documents/Ensemble Data/Ensemble-Data/src/models/books-schema.js');

async function getBooks() {
  return Books.find({});
}

async function create(title) {
  return Books.create({ title });
}

module.exports = {
  getBooks,
  create,
};
