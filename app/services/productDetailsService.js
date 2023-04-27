const productDetailsRepository = require('../repositories/productDetailsRepository');

const getProductDetailsById = async (id) => {
  try {
    const productDetails = await productDetailsRepository.getProductDetailsById(
      id,
    );
    return productDetails;
  } catch (error) {
    return error;
  }
};

const createProductDetails = async (data) => {
  try {
    const productDetails = await productDetailsRepository.createProductDetails(
      data,
    );
    return productDetails;
  } catch (error) {
    return error;
  }
};

const updateProductDetails = async (id, data) => {
  try {
    const productDetails = await productDetailsRepository.updateProductDetails(
      data,
      id,
    );
    return productDetails;
  } catch (error) {
    return error;
  }
};

const deleteProductDetails = async (id) => {
  try {
    const productDetails = await productDetailsRepository.deleteProductDetails(
      id,
    );
    return productDetails;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getProductDetailsById,
  createProductDetails,
  updateProductDetails,
  deleteProductDetails,
};
