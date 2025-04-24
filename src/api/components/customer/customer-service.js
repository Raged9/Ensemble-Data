const customerRepository = require('./customer-repository');

async function getUnitsHistory(days) {
  return customerRepository.getUnitsHistory(days);
}

async function getUsedUnits() {
  return customerRepository.getUsedUnits();
}

async function createDataCustomer(tanggal, tiktok, reddit, instagram, youtube, twitch){
  return customerRepository.createDataUnits(tanggal, tiktok, reddit, instagram, youtube, twitch);
}

module.exports = {
  getUnitsHistory,
  getUsedUnits,
  createDataCustomer,
};
