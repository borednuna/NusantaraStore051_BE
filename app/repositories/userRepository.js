const { Op } = require('sequelize');
const { user, Sequelize } = require('../models');
const { address } = require('../models/address');
const { product } = require('../models/product');
const { transaction } = require('../models/transaction');

const getUserById = (id) => {
  return user.findOne({
    where: {
      id: id,
    },
  });
};

const getUserByName = (name) => {
  return user.findAll({
    where: {
      name: {
        [Op.like]: name,
      },
    },
  });
};

const getSellerByName = (name) => {
  return user.findAll({
    where: {
      name: {
        [Op.like]: name,
      },
      is_seller: true,
    },
  });
};

const getUserAddress = (id) => {
  return user.findAll({
    include: {
      model: address,
      where: {
        user_id: id,
      },
    },
    where: {
      id: id,
    },
  });
};

const getProductByUser = (id) => {
  return user.findAll({
    include: {
      model: product,
      where: {
        user_id: id,
      },
    },
    where: {
      id: id,
    },
  });
};

const getTransactionByUser = (id) => {
  return user.findAll({
    include: {
      model: transaction,
      where: {
        id: Sequelize.col('user_id'), 
      },
    },
    where: {
      id: id,
    },
  });
};

const createUser = (data) => {
  return user.create(data);
};

const updateUser = (data, id) => {
  return user.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteUser = (id) => {
  return user.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getUserById,
  getUserByName,
  getSellerByName,
  getUserAddress,
  getProductByUser,
  getTransactionByUser,
  createUser,
  updateUser,
  deleteUser,
};
