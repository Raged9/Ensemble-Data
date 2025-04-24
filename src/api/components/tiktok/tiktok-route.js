const express = require('express');
const controller = require('./tiktok-controller');

module.exports = (app) => {
  app.get('/tiktok/followers', controller.getFollowers);
  app.get('/tiktok/followings', controller.getFollowings);
  app.post('/tiktok', controller.createTiktokData);
};
