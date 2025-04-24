const express = require('express');
const youtubeController = require('./youtube-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/youtube', route);

  route.get('/subscriber-count', youtubeController.getChannelSubscriberCount);
  route.get('/username-to-id', youtubeController.getChannelUsernameToId);
  route.get('/id-to-username', youtubeController.getChannelIdToUsername);

  route.post('/data', youtubeController.createChannelData);
};