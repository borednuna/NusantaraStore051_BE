const router = require('express').Router();
const wishlistController = require('../controllers/wishlistController');

router.post('/', wishlistController.createWishlist);
router.delete('/:id', wishlistController.deleteWishlist);

module.exports = router;
