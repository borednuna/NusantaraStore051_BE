const { detailed_wishlist } = require('../models');

const createDetailedWishlist = (data) => {
  return detailed_wishlist.create(data);
};

const deleteDetailedWishlist = (id) => {
  return detailed_wishlist.destroy({
    where: {
      id: id,
    },
  });
};
