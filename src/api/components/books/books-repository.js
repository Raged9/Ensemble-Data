// eslint-disable-next-line prettier/prettier
const { Books } = require('../../../models/books-schema.js');

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
