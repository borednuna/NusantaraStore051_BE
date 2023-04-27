const router = require('express').Router();
const productDetailsController = require('../controllers/productDetailsController');

router.get('/:id', productDetailsController.getProductDetailsById);
router.post('/', productDetailsController.createProductDetails);
router.put('/:id', productDetailsController.updateProductDetails);
router.delete('/:id', productDetailsController.deleteProductDetails);

module.exports = router;
