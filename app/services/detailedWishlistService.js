const detailedWishlistRepository = require('../repositories/detailedWishlistRepository');

const getAllDetailedWishlist = async (id) => {
  try {
    const wishlist = await detailedWishlistRepository.getAllDetailedWishlist(
      id,
    );
    return wishlist;
  } catch (error) {
    return error;
  }
};

const createDetailedWishlist = async (data) => {
  try {
    const wishlist = await detailedWishlistRepository.createDetailedWishlist(
      data,
    );
    return wishlist;
  } catch (error) {
    return error;
  }
};

const deleteDetailedWishlist = async (id) => {
  try {
    const wishlist = await detailedWishlistRepository.deleteDetailedWishlist(
      id,
    );
    return wishlist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllDetailedWishlist,
  createDetailedWishlist,
  deleteDetailedWishlist,
};
