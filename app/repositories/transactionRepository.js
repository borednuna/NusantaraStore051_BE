const { transaction } = require('../models');

const createTransaction = (data) => {
  return transaction.create(data);
};

const deleteTransaction = (id) => {
  return transaction.destroy({
    where: {
      id: id,
    },
  });
};

const updateTransaction = (id, data) => {
  return transaction.update(data, {
    where: {
      id: id,
    },
  });
};

module.exports = {
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
