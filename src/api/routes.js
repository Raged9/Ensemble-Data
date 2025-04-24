const express = require('express');

const customer = require('./components/customer/customer-route');

module.exports = () => {
  const app = express.Router();

  customer(app);

  return app;
};
