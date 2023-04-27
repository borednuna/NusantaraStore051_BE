const wishlistRepository = require('../repositories/wishlistRepository');

const getAllDetailedWishlist = async (id) => {
  try {
    const wishlist = await wishlistRepository.getAllDetailedWishlist(id);
    return wishlist;
  } catch (error) {
    return error;
  }
};

const createWishlist = async (data) => {
  try {
    const wishlist = await wishlistRepository.createWishlist(data);
    return wishlist;
  } catch (error) {
    return error;
  }
};

const deleteWishlist = async (id) => {
  try {
    const wishlist = await wishlistRepository.deleteWishlist(id);
    return wishlist;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllDetailedWishlist,
  createWishlist,
  deleteWishlist,
};
