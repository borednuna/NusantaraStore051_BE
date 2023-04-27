const { wishlist } = require('../models');

const getAllDetailedWishlist = (id) => {
  return wishlist.findAll({
    where: {
      user_id: id,
    },
    include: [
      {
        model: product,
        where: {
          id: Sequelize.col('detailed_wishlist.product_id'),
        },
      },
    ],
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
