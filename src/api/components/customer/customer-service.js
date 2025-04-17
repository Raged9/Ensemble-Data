const customerRepository = require('./customer-repository');

async function getUnitsHistory() {
  return customerRepository.getUnitsHistory();
}

async function getUsedUnits() {
  return customerRepository.getUsedUnits();
}

module.exports = {
  getUnitsHistory,
  getUsedUnits,
};
