const { cart, Sequelize } = require('../models');
const { detailed_card } = require('../models');

const getCartById = (id) => {
  return cart.findOne({
    where: {
      id: id,
    },
  });
};

const getCartItems = (id) => {
  return cart.findAll({
    include: [
      {
        model: detailed_card,
        where: {
          cart_id: Sequelize.col('cart.id'),
        },
      },
    ],
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
  getCartItems,
  createCart,
  deleteCart,
};
