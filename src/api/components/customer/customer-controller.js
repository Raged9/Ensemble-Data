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

    const days = parseInt(request.query.days) || 7;
    
    const customers = await customerService.getUnitsHistory(days);
    
    return response.status(200).json(customers);
  } catch (error) {
    return next(error);
  }
}

async function createDataCustomer(request, response, next) {
  try {
    const {
      tanggal,
      tiktok,
      instagram,
      reddit,
      youtube,
      twitch,
    } = request.body;

    const success = await customerService.createDataCustomer(
      tanggal,
      tiktok,
      instagram,
      reddit,
      youtube,
      twitch,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create data'
      );
    }

    return response.status(201).json({ message: 'Data created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getUnitsHistory,
  getUsedUnits,
  createDataCustomer,
};
