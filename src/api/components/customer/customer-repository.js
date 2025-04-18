const { Customer } = require('/Users/Arya/Documents/Ensemble Data/Ensemble-Data/src/models/customer-schema.js');

async function getUnitsHistory() {
  return Customer.find({});
}

async function getUsedUnits(title) {
  return Customer.find({});
}

module.exports = {
  getUnitsHistory,
  getUsedUnits,
};