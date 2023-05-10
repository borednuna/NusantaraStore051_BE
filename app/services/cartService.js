const { sequelize } = require('../models');
const cartRepository = require('../repositories/cartRepository');

const getCartById = async (id) => {
  try {
    const cart = cartRepository.getCartById(id);
    return cart;
  } catch (error) {
    return error;
  }
};

const getCartItems = async (id) => {
  try {
    const cart = sequelize.query("SELECT * FROM carts JOIN detailed_carts ON carts.id = detailed_carts.cart_id JOIN products ON products.id = detailed_carts.product_id", {
      replacements: { id: id },
      type: sequelize.QueryTypes.SELECT,
      });
    return cart;
  } catch (error) {
    return error;
  }
};

const createCart = async (data) => {
  try {
    const cart = cartRepository.createCart(data);
    return cart;
  } catch (error) {
    return error;
  }
};

const deleteCart = async (id) => {
  try {
    const cart = cartRepository.deleteCart(id);
    return cart;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getCartById,
  getCartItems,
  createCart,
  deleteCart,
};
