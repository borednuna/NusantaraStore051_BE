const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.getUserById);
router.get('/name/:name', userController.getUserByName);
router.get('/seller_name/:seller_name', userController.getSellerByName);
router.get('/user_address/:id', userController.getUserAddress);
router.get('/product_by_user/:id', userController.getProductByUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
