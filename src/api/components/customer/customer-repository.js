const { Customer } = require('/Users/ASUS/backendutsss/Ensemble-Data/src/models/customer-schema.js');

async function getUsedUnits() {
  // Buat tanggal untuk awal hari ini (00:00:00)
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  
  // Buat tanggal untuk akhir hari ini (23:59:59.999)
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);
  
  // Query data antara awal dan akhir hari ini
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