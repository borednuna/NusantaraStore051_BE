const { address } = require('../models');

const getAddressByUserId = (user_id) => {
  return address.findAll({
    where: {
      user_id: user_id,
    },
  });
};

const createAddress = (data) => {
  return address.create(data);
};

const updateAddress = (id, data) => {
  return address.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteAddress = (id) => {
  return address.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAddressByUserId,
  createAddress,
  updateAddress,
  deleteAddress,
};
