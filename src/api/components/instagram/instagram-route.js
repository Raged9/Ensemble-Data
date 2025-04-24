const express = require('express');

const instagramController = require('./instagram-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/instagram', route);

  route.get('/', instagramController.getinfo);
  route.get('/fol', instagramController.getfollower);

  route.post('/', instagramController.createinstagram);

};
