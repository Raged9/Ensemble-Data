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
    // Tambahkan log untuk debugging
    const days = parseInt(request.query.days) || 7;
    console.log(`Request untuk mengambil data ${days} hari terakhir`);
    
    const customers = await customerService.getUnitsHistory(days);
    console.log(`Data yang ditemukan: ${customers.length} item`);
    
    // Log data pertama untuk debugging jika ada
    if (customers.length > 0) {
      console.log(`Contoh data pertama:`, JSON.stringify(customers[0]));
    }
    
    return response.status(200).json(customers);
  } catch (error) {
    console.error(`Error saat mengambil data: ${error.message}`);
    return next(error);
  }
}

async function createDataUnits(request, response, next) {
  try {
    const {
      tanggal,
      tiktok,
      instagram,
      reddit,
      youtube,
      twitch,
    } = request.body;

    // Create the data
    const success = await customerService.createDataUnits(
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
  createDataUnits,
};
