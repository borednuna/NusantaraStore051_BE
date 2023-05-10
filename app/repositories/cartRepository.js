const { cart, Sequelize } = require('../models');
const { detailed_cart } = require('../models');
const { product } = require('../models');

const getCartById = (id) => {
  return cart.findOne({
    where: {
      user_id: id,
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
