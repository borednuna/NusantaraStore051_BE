const router = require('express').Router();
const reviewRoutes = require('./reviewRoutes');

router.get('/:id', reviewRoutes.getReviewByProductId);
router.post('/', reviewRoutes.createReview);
router.delete('/:id', reviewRoutes.deleteReview);

module.exports = router;
