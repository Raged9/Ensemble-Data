const customerService = require('./customer-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getUsedUnits(request, response, next) {
  try {
    const usedUnits = await customerService.getUsedUnits();

    return response.status(200).json(usedUnits);
  } catch (error) {
    return next(error);
  }
}

async function getUnitsHistory(request, response, next) {
  try {
    const usedHistory = await customerService.getUnitsHistory();

    return response.status(200).json(usedHistory);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUnitsHistory,
  getUsedUnits,
};
