const { cart } = require('../models');
const { user } = require('../models');

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
        model: user,
        where: {
          id: Sequelize.col('cart.user_id'),
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
