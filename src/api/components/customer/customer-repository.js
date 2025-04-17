const { Customer } = require('../../../models');

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