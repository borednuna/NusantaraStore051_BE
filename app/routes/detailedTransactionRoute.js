const router = require('express').Router();
const detailedTransactionController = require('../controllers/detailedTransactionController');

router.post('/', detailedTransactionController.createTransactionItem);
router.delete('/:id', detailedTransactionController.deleteTransactionItem);
router.put('/:id', detailedTransactionController.updateTransactionItem);

module.exports = router;
