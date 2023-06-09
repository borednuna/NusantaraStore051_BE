const cartService = require('../services/cartService');

const getCartById = async (req, res) => {
  const id = req.params.id;
  cartService
    .getCartById(id)
    .then((cart) => {
      if (!cart) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved cart',
          data: cart,
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

const getCartItems = async (req, res) => {
  const id = req.params.id;
  cartService
    .getCartItems(id)
    .then((cart) => {
      if (!cart) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved cart items',
          data: cart,
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

const createCart = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
  };
  mahasiswaService
    .createMahasiswa(data)
    .then((cart) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully created cart',
        data: cart,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

const deleteCart = (req, res) => {
  const id = req.params.id;
  mahasiswaService
    .deleteMahasiswa(nrp)
    .then((cart) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully removed cart',
        data: cart,
      });
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
  getCartById,
  getCartItems,
  createCart,
  deleteCart,
};
