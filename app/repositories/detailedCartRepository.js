const { detailed_cart } = require('../models');

const getDetailedCartByCartId = (id) => {
  return detailed_cart.findAll({
    where: {
      cart_id: id,
    },
  });
};

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
  getDetailedCartByCartId,
  createDetailedCart,
  updateDetailedCart,
  deleteDetailedCart,
};
