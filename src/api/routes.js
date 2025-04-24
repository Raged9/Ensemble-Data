const express = require('express');

const tiktok = require('./components/tiktok/tiktok-route');

module.exports = () => {
  const app = express.Router();

  tiktok(app);

  return app;
};
