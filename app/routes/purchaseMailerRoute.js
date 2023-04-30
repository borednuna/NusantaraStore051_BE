const purchaseMailerController = require('../controllers/purchaseMailerController');
const router = require('express').Router();

router.post('/purchase', purchaseMailerController.purchase);

module.exports = router;
