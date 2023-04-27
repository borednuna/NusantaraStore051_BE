const router = require('express').Router();
const paymentController = require('../controllers/paymentController');

router.post('/', paymentController.createPayment);
router.delete('/:id', paymentController.deletePayment);
router.put('/:id', paymentController.updatePayment);

module.exports = router;
