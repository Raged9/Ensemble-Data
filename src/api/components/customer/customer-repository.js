const { Customer } = require('/Users/Arya/Documents/Ensemble Data/Ensemble-Data/src/models/customer-schema.js');

async function getUsedUnits() {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  
  return Customer.find({
    tanggal: { 
      $gte: startOfDay,
      $lte: endOfDay 
    }
  });
}

async function createDataUnits(tanggal, tiktok, reddit, instagram, youtube, twitch) {
  return Customer.create({tanggal, tiktok, reddit, instagram, youtube, twitch })
}

async function getUnitsHistory(days) {

  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - days);
   
  return Customer.find({tanggal: { $gte: startDate }});
}

module.exports = {
  getUnitsHistory,
  getUsedUnits,
  createDataUnits,
};