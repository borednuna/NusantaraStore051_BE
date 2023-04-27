const { payment } = require('../models');

const createPayment = (data) => {
  return payment.create(data);
};

const deletePayment = (id) => {
  return payment.destroy({
    where: {
      id: id,
    },
  });
};

const updatePayment = (id, data) => {
  return payment.update(data, {
    where: {
      id: id,
    },
  });
};

module.exports = {
  createPayment,
  deletePayment,
  updatePayment,
};
