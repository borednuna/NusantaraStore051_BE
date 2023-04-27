const router = require('express').Router();
const transactionController = require('../controllers/transactionController');

router.post('/', transactionController.createTransaction);
router.delete('/:id', transactionController.deleteTransaction);
router.put('/:id', transactionController.updateTransaction);

module.exports = router;
