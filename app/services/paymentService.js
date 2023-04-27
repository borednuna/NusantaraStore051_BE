const paymentRepository = require('../repositories/paymentRepository');

const createPayment = async (data) => {
  try {
    const item = await paymentRepository.createPayment(data);
    return item;
  } catch (error) {
    throw error;
  }
};

const deletePayment = async (id) => {
  try {
    const item = await paymentRepository.deletePayment(id);
    return item;
  } catch (error) {
    throw error;
  }
};

const updatePayment = async (id, data) => {
  try {
    const item = await paymentRepository.updatePayment(id, data);
    return item;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPayment,
  deletePayment,
  updatePayment,
};
