const {review} = require('../models');

const getReviewByProductId = (product_id) => {
    return review.findAll({
        where: {
            product_id: product_id
        }
    });
}

const createReview = (data) => {
    return review.create(data);
}

const deleteReview = (id) => {
    return review.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getReviewByProductId,
    createReview,
    deleteReview
}