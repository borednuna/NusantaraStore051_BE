const productDetailsService = require('../services/productDetailsService');

const getProductDetailsById = async (req, res) => {
  const id = req.params.id;
  productDetailsService
    .getProductDetailsById(id)
    .then((productDetails) => {
      if (!productDetails) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved product details',
          data: productDetails,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

const createProductDetails = async (req, res) => {
  const data = {
    product_id: req.body.product_id,
    weight: req.body.weight,
    dimensions: req.body.dimensions,
    color: req.body.color,
    size: req.body.size,
    material: req.body.material,
  };
  productDetailsService
    .createProductDetails(data)
    .then((productDetails) => {
      if (!productDetails) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully created product details',
          data: productDetails,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

const updateProductDetails = async (req, res) => {
  const id = req.params.id;
  const data = {
    product_id: req.body.product_id,
    weight: req.body.weight,
    dimensions: req.body.dimensions,
    color: req.body.color,
    size: req.body.size,
    material: req.body.material,
  };
  productDetailsService
    .updateProductDetails(id, data)
    .then((productDetails) => {
      if (!productDetails) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully updated product details',
          data: productDetails,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

const deleteProductDetails = async (req, res) => {
  const id = req.params.id;
  productDetailsService
    .deleteProductDetails(id)
    .then((productDetails) => {
      if (!productDetails) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully deleted product details',
          data: productDetails,
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

module.exports = {
  getProductDetailsById,
  createProductDetails,
  updateProductDetails,
  deleteProductDetails,
};
