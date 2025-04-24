const express = require('express');

const customer = require('./components/customer/customer-route');
const tiktok = require('./components/tiktok/tiktok-route');
const youtube = require('./components/youtube/youtube-route');

module.exports = () => {
  const app = express.Router();

  customer(app);
  tiktok(app);
  youtube(app);

  return app;
};
