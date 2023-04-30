const router = require('express').Router();
const feedbackMailerController = require('../controllers/feedbackMailerController');

router.post('/', feedbackMailerController.feedbackMailer);

module.exports = router;
