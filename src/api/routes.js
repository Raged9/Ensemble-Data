const express = require('express');

const customer = require('./components/customer/customer-route');
const instagram = require('./components/instagram/instagram-route');

module.exports = () => {
  const app = express.Router();

  customer(app);
  instagram(app);

  return app;
};
