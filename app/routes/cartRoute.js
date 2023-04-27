const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/:id', cartController.getCartById);
router.get('/cart_items/:id', cartController.getCartItems);
router.post('/', cartController.createCart);
router.delete('/:id', cartController.deleteCart);

module.exports = router;
