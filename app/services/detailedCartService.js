const detailedCartRepository = require('../repositories/detailedCartRepository');

const createDetailedCart = async (data) => {
  try {
    const detailedCart = await detailedCartRepository.createDetailedCart(data);
    return detailedCart;
  } catch (error) {
    return error;
  }
};

const updateDetailedCart = async (id, data) => {
  try {
    const detailedCart = await detailedCartRepository.updateDetailedCart(
      data,
      id,
    );
    return detailedCart;
  } catch (error) {
    return error;
  }
};

const deleteDetailedCart = async (id) => {
  try {
    const detailedCart = await detailedCartRepository.deleteDetailedCart(id);
    return detailedCart;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createDetailedCart,
  updateDetailedCart,
  deleteDetailedCart,
};
