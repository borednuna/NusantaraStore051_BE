const { detailed_transaction } = require('../models');

const createTransactionItem = (data) => {
  return detailed_transaction.create(data);
};

const deleteTransactionItem = (id) => {
  return detailed_transaction.destroy({
    where: {
      id: id,
    },
  });
};

const updateTransactionItem = (id, data) => {
  return detailed_transaction.update(data, {
    where: {
      id: id,
    },
  });
};

module.exports = {
  createTransactionItem,
  deleteTransactionItem,
  updateTransactionItem,
};
