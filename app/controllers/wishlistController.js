const wishlistService = require('../services/wishlistService');

const getAllDetailedWishlist = async (req, res) => {
  const id = req.params.id;
  wishlistService
    .getAllDetailedWishlist(id)
    .then((wishlist) => {
      if (!wishlist) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved wishlist',
          data: wishlist,
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

const createWishlist = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
  };
  wishlistService
    .createWishlist(data)
    .then((wishlist) => {
      if (!wishlist) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully created wishlist',
          data: wishlist,
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

const deleteWishlist = async (req, res) => {
  const id = req.params.id;
  wishlistService
    .deleteWishlist(id)
    .then((wishlist) => {
      if (!wishlist) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully deleted wishlist',
          data: wishlist,
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
  getAllDetailedWishlist,
  createWishlist,
  deleteWishlist,
};
