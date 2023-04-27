const userRepository = require('../repositories/userRepository');

const getUserById = async (id) => {
  try {
    const user = await userRepository.getUserById(id);
    return user;
  } catch (error) {
    return error;
  }
};

const getUserByName = async (name) => {
  try {
    const users = await userRepository.getUserByName(name);
    return users;
  } catch (error) {
    return error;
  }
};

const getSellerByName = async (seller_name) => {
  try {
    const users = await userRepository.getSellerByName(seller_name);
    return users;
  } catch (error) {
    return error;
  }
};

const getUserAddress = async (id) => {
  try {
    const users = await userRepository.getUserAddress(id);
    return users;
  } catch (error) {
    return error;
  }
};

const getProductByUser = async (id) => {
  try {
    const users = await userRepository.getProductByUser(id);
    return users;
  } catch (error) {
    return error;
  }
};

const getTransactionByUser = async (id) => {
  try {
    const users = await userRepository.getTransactionByUser(id);
    return users;
  } catch (error) {
    return error;
  }
};

const createUser = async (data) => {
  try {
    const user = await userRepository.createUser(data);
    return user;
  } catch (error) {
    return error;
  }
};

const updateUser = async (data, id) => {
  try {
    const user = await userRepository.updateUser(data, id);
    return user;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await userRepository.deleteUser(id);
    return user;
  } catch (error) {
    return error;
  }
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
