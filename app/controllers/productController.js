const productService = require('../services/productService');

const getProductById = async (req, res) => {
  const id = req.params.id;
  productService
    .getProductById(id)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved products',
          data: users,
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

const getProductByName = async (req, res) => {
  const name = req.params.name;
  productService
    .getProductByName(name)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved products',
          data: product,
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

const getProductDetail = async (req, res) => {
  const id = req.params.id;
  productService
    .getProductDetail(id)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved product detail',
          data: users,
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

const getProductImages = async (req, res) => {
  const id = req.params.id;
  productService
    .getProductImages(id)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved product images',
          data: users,
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

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = {
    user_id: req.body.user_id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    sold: req.body.sold,
    category: req.body.category,
  };
  productService
    .updateProduct(id, data)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully updated product',
          data: users,
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

const createProduct = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    sold: req.body.sold,
    category: req.body.category,
  };
  productService
    .createProduct(data)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully created product',
          data: users,
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

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  productService
    .deleteProduct(id)
    .then((product) => {
      if (!product) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully deleted product',
          data: users,
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
  getProductById,
  getProductByName,
  getProductDetail,
  getProductImages,
  updateProduct,
  createProduct,
  deleteProduct,
};
