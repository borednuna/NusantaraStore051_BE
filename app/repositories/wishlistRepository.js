const { wishlist } = require('../models');
const { detailed_wishlist } = require('../models');

const getAllDetailedWishlist = (id) => {
  return wishlist.findAll({
    where: {
      user_id: id,
    },
    include: {detailed_wishlist}
  });
};

const createWishlist = (data) => {
  return wishlist.create(data);
};

const deleteWishlist = (id) => {
  return wishlist.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllDetailedWishlist,
  createWishlist,
  deleteWishlist,
};
