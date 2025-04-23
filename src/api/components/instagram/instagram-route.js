const express = require('express');

const instagramController = require('./instagram-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/instagram', route);

  // Get user info by username
  route.get('/user/:username', instagramController.getInfo);

  // Get basic stats (followers and following) by username
  route.get('/stats/:username', instagramController.getBasicStat);

  // Get follower count by username
  route.get('/followers/:username', instagramController.getFollowerCount);

  // Create new Instagram user data
  route.post('/', instagramController.createDataInstagram);
};
