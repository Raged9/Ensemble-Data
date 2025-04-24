const express = require('express');

const instagramController = require('./instagram-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/instagrams', route);

  // Get list of books
  route.get('/', instagramController.getinfo);
  route.get('/fol', instagramController.getfollower);

  // Create a new book
  route.post('/', instagramController.createinstagram);

  // TODO: Get a book by id

  // TODO: Update a book by id

  // TODO: Delete a book by id
};
