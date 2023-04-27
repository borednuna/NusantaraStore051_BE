const { product_details } = require('../models');

const getProductDetailsById = (id) => {
  return product_details.findOne({
    where: {
      id: id,
    },
  });
};

const createProductDetails = (data) => {
  return product_details.create(data);
};

const updateProductDetails = (data, id) => {
  return product_details.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteProductDetails = (id) => {
  return product_details.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getProductDetailsById,
  createProductDetails,
  updateProductDetails,
  deleteProductDetails,
};
