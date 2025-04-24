const express = require('express');

const customer = require('./components/customer/customer-route');
const tiktok = require('./components/tiktok/tiktok-route');
const youtube = require('./components/youtube/youtube-route');
const twitch = require('./components/twitch/twitch-route');
const instagram = require('./components/instagram/instagram-route');

module.exports = () => {
  const app = express.Router();

  customer(app);
  tiktok(app);
  youtube(app);
  twitch(app);
  instagram(app);

  return app;
};
