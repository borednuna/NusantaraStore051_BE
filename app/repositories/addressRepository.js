const { address } = require('../models');

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
  createAddress,
  updateAddress,
  deleteAddress,
};
