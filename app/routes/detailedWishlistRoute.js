const router = require('express').Router();
const detailedWishlistController = require('../controllers/detailedWishlistController');

router.get('/:id', detailedWishlistController.getAllDetailedWishlist);
router.post('/', detailedWishlistController.createDetailedWishlist);
router.delete('/:id', detailedWishlistController.deleteDetailedWishlist);

module.exports = router;
