const express = require('express');

const customer = require('./components/customer/customer-route');
const tiktok = require('./components/tiktok/tiktok-route');

module.exports = () => {
  const app = express.Router();

  customer(app);
  tiktok(app);

  return app;
};
