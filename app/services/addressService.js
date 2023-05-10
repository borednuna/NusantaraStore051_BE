const addressRepository = require('../repositories/addressRepository');

const getAddressByUserId = async (user_id) => {
  try {
    const address = addressRepository.getAddressByUserId(user_id);
    return address;
  } catch (error) {
    return error;
  }
};

const createAddress = async (data) => {
  try {
    const address = addressRepository.createAddress(data);
    return address;
  } catch (error) {
    return error;
  }
};

const updateAddress = async (id, data) => {
  try {
    const address = addressRepository.updateAddress(id, data);
    return address;
  } catch (error) {
    return error;
  }
};

const deleteAddress = async (id) => {
  try {
    const address = addressRepository.deleteAddress(id);
    return address;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAddressByUserId,
  createAddress,
  updateAddress,
  deleteAddress,
};
