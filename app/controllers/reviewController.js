const reviewService = require('../services/reviewService');

const getReviewByProductId = async (req, res) => {
    const id = req.params.id;
    reviewService
      .getReviewByProductId(id)
      .then((reviews) => {
        if (!reviews) {
          res.status(404).send({
            status: 'error',
            message: error.message,
            data: {},
          });
        } else {
          res.status(200).send({
            status: 'success',
            message: 'Successfully retrieved product details',
            data: productDetails,
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      });
  };

const createReview = async (req, res) => {
    const data = {
        product_id: req.body.product_id,
        user_id: req.body.user_id,
        star: req.body.star,
        content: req.body.content
    };
    reviewService
        .createReview(data)
        .then((review) => {
            if (!review) {
                res.status(404).send({
                    status: 'error',
                    message: error.message,
                    data: {},
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Successfully created reviews',
                    data: review,
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                status: 'error',
                message: error.message,
                data: {},
            });
        });
}

const deleteReview = async (req, res) => {
    const id = req.params.id;
    reviewService
        .deleteReview(id)
        .then((review) => {
            if (!review) {
                res.status(404).send({
                    status: 'error',
                    message: error.message,
                    data: {},
                });
            } else {
                res.status(200).send({
                    status: 'success',
                    message: 'Successfully deleted reviews',
                    data: review,
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                status: 'error',
                message: error.message,
                data: {},
            });
        });
}

module.exports = {
    getReviewByProductId,
    createReview,
    deleteReview
}
