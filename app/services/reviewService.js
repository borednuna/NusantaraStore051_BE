const reviewRepository = require('../repositories/reviewRepository');

const getReviewByProductId = async (product_id) => {
    try {
        const reviews = await reviewRepository.getReviewByProductId(product_id);
        return reviews;
    }
    catch (error) {
        throw error;
    }
}

const createReview = async (data) => {
    try {
        const review = await reviewRepository.createReview(data);
        return review;
    }
    catch (error) {
        throw error;
    }
}

const deleteReview = async (id) => {
    try {
        const review = await reviewRepository.deleteReview(id);
        return review;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getReviewByProductId,
    createReview,
    deleteReview
}
