const imageService = require('../services/imageService');

const getAllImage = async (req, res) => {
  imageService
    .getAllImage()
    .then((image) => {
      if (!image) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved image',
          data: image,
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

const getImageByProductId = async (req, res) => {
  const id = req.params.id;
  imageService
    .getImageByProductId(id)
    .then((image) => {
      if (!image) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved image',
          data: image,
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

const createImage = async (req, res) => {
  const data = {
    product_id: req.body.product_id,
    name: req.body.name,
    url: req.body.url,
  };
  productService
    .createProduct(data)
    .then((image) => {
      if (!image) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully created image',
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

const updateImage = async (req, res) => {
  const id = req.params.id;
  const data = {
    product_id: req.body.product_id,
    name: req.body.name,
    url: req.body.url,
  };
  productService
    .updateProduct(id, data)
    .then((image) => {
      if (!image) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully updated image',
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

const deleteImage = async (req, res) => {
  const id = req.params.id;
  productService
    .deleteProduct(id)
    .then((image) => {
      if (!image) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully deleted image',
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
  getAllImage,
  getImageByProductId,
  createImage,
  updateImage,
  deleteImage,
};
