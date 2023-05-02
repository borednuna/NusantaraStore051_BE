const { Op } = require('sequelize');
const { product, Sequelize } = require('../models');
const { product_details } = require('../models');
const { image } = require('../models');

const getAllProduct = () => {
  return product.findAll();
};

const getProductById = (id) => {
  return product.findOne({
    where: {
      id: id,
    },
  });
};

const getProductByName = (name) => {
  return product.findAll({
    where: {
      name: {
        [Op.like]: name,
      },
    },
  });
};

const getProductDetail = (id) => {
  return product.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: product_details,
        where: {
          product_id: Sequelize.col('product.id'),
        },
      },
    ],
  });
};

const getProductImages = (id) => {
  return product.findAll({
    where: {
      id: id,
    },
    include: [
      {
        model: image,
        where: {
          product_id: Sequelize.col('product.id'),
        },
      },
    ],
  });
};

const updateProduct = (id, data) => {
  return product.update(data, {
    where: {
      id: id,
    },
  });
};

const createProduct = (data) => {
  return product.create(data);
};

const deleteProduct = (id) => {
  return product.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllProduct,
  getProductById,
  getProductByName,
  getProductDetail,
  getProductImages,
  updateProduct,
  createProduct,
  deleteProduct,
};
