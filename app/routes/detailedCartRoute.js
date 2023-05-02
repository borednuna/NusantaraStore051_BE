const router = require('express').Router();
const detailedCartController = require('../controllers/detailedCartController');

router.get('/:id', detailedCartController.getDetailedCartByCartId);
router.post('/', detailedCartController.createDetailedCart);
router.put('/:id', detailedCartController.updateDetailedCart);
router.delete('/:id', detailedCartController.deleteDetailedCart);

module.exports = router;
