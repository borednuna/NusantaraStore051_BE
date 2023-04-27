const detailedCartService = require('../services/detailedCartService');

const createDetailedCart = async (req, res) => {
  const data = {
    cart_id: req.body.cart_id,
    product_id: req.body.product_id,
    item_amount: req.body.item_amount,
  };
  detailedCartService
    .createDetailedCart(data)
    .then((detailedCart) => {
      if (!detailedCart) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully created detailed cart',
          data: detailedCart,
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

const updateDetailedCart = async (req, res) => {
  const id = req.params.id;
  const data = {
    cart_id: req.body.cart_id,
    product_id: req.body.product_id,
    item_amount: req.body.item_amount,
  };
  detailedCartService
    .updateDetailedCart(id, data)
    .then((detailedCart) => {
      if (!detailedCart) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully updated detailed cart',
          data: detailedCart,
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

const deleteDetailedCart = async (req, res) => {
  const id = req.params.id;
  detailedCartService
    .deleteDetailedCart(id)
    .then((detailedCart) => {
      if (!detailedCart) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully deleted detailed cart',
          data: detailedCart,
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
  createDetailedCart,
  updateDetailedCart,
  deleteDetailedCart,
};
