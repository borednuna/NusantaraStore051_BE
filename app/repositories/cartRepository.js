const cart = require('../models/cart');
const user = require('../models/user');

const getCartById = (id) => {
  return cart.findOne({
    where: {
      id: id,
    },
  });
};

const createCart = (data) => {
  return cart.create(data);
};

const deleteCart = (id) => {
  return cart.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getCartById,
  createCart,
  deleteCart,
};
