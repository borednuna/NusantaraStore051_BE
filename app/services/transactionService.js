const transactionRepository = require('../repositories/transactionRepository');

const createTransaction = async (data) => {
  try {
    const transaction = await transactionRepository.createTransaction(data);
    return transaction;
  } catch (error) {
    return error;
  }
};

const deleteTransaction = async (id) => {
  try {
    const transaction = await transactionRepository.deleteTransaction(id);
    return transaction;
  } catch (error) {
    return error;
  }
};

const updateTransaction = async (id, data) => {
  try {
    const transaction = await transactionRepository.updateTransaction(id, data);
    return transaction;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
