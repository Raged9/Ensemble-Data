const express = require('express');

const twitchController = require('./twitch-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/twitch', route);

  route.get('/followers', twitchController.getFollowers);
  
  route.get('/', twitchController.getVideos);

  route.get('/search', twitchController.search);

  route.post('/', twitchController.createFollowers);
};