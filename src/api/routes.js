const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const customer = require('./components/customer/customer-route');
const twitch = require('./components/twitch/twitch-route');


module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  customer(app);
  twitch(app)

  return app;
};
