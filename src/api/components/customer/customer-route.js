const express = require('express');

const customerController = require('./customer-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/customer', route);

  route.get('/used-units', customerController.getUsedUnits);

  route.get('/by-days', customerController.getUnitsHistory);

  route.post('/', customerController.createDataCustomer);

};
