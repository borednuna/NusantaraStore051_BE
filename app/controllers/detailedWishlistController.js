const detailedWishlistService = require('../services/detailedWishlistService');

const getAllDetailedWishlist = async (req, res) => {
    const id = req.params.id;
    detailedWishlistService
      .getAllDetailedWishlist(id)
      .then((detailed_wishlist) => {
        if (!detailed_wishlist) {
          res.status(404).send({
            status: 'error',
            message: error.message,
            data: {},
          });
        } else {
          res.status(200).send({
            status: 'success',
            message: 'Successfully retrieved all detailed wishlist',
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

const createDetailedWishlist = async (req, res) => {
    const data = req.body;
    detailedWishlistService
      .createDetailedWishlist(data)
      .then((detailed_wishlist) => {
        if (!detailed_wishlist) {
          res.status(404).send({
            status: 'error',
            message: error.message,
            data: {},
          });
        } else {
          res.status(200).send({
            status: 'success',
            message: 'Successfully created detailed wishlist',
            data: detailed_wishlist,
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
  }

const deleteDetailedWishlist = async (req, res) => {
    const id = req.params.id;
    detailedWishlistService
      .deleteDetailedWishlist(id)
      .then((detailed_wishlist) => {
        if (!detailed_wishlist) {
          res.status(404).send({
            status: 'error',
            message: error.message,
            data: {},
          });
        } else {
          res.status(200).send({
            status: 'success',
            message: 'Successfully deleted detailed wishlist',
            data: detailed_wishlist,
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
  }

module.exports = {
    getAllDetailedWishlist,
    createDetailedWishlist,
    deleteDetailedWishlist
}
