const router = require('express').Router();
const reviewController = require('../controllers/reviewController');

router.get('/:id', reviewController.getReviewByProductId);
router.post('/', reviewController.createReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;
