const { detailed_cart } = require('../models');

const createDetailedCart = (data) => {
  return detailed_cart.create(data);
};

const updateDetailedCart = (data, id) => {
  return detailed_cart.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteDetailedCart = (id) => {
  return detailed_cart.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createDetailedCart,
  updateDetailedCart,
  deleteDetailedCart,
};
