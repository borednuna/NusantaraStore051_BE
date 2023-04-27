const detailedTransactionRepository = require('../repositories/detailedTransactionRepository');

const createTransactionItem = async (data) => {
  try {
    const transactionItem =
      await detailedTransactionRepository.createTransactionItem(data);
    return transactionItem;
  } catch (error) {
    throw error;
  }
};

const deleteTransactionItem = async (id) => {
  try {
    const transactionItem =
      await detailedTransactionRepository.deleteTransactionItem(id);
    return transactionItem;
  } catch (error) {
    throw error;
  }
};

const updateTransactionItem = async (id, data) => {
  try {
    const transactionItem =
      await detailedTransactionRepository.updateTransactionItem(id, data);
    return transactionItem;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTransactionItem,
  deleteTransactionItem,
  updateTransactionItem,
};
