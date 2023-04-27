const { Op } = require("sequelize");
const user = require("../models/user");
const address = require("../models/address");
const product = require("../models/product");

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
  createUser,
  updateUser,
  deleteUser,
};
