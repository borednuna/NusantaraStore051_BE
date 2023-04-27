const router = require('express').Router();
const productController = require('../controllers/productController');

router.get('/:id', productController.getProductById);
router.get('/name/:name', productController.getProductByName);
router.get('/product_details/:id', productController.getProductDetail);
router.get('/images/:id', productController.getProductImages);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
