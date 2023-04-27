const paymentService = require('../services/paymentService');

const createPayment = async (req, res) => {
  const data = {
    transaction_id: req.body.transaction_id,
    type: req.body.type,
    amount: req.body.amount,
  };
  paymentService
    .createPayment(data)
    .then((payment) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully created payment',
        data: payment,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

const deletePayment = async (req, res) => {
  const id = req.params.id;
  paymentService
    .deletePayment(id)
    .then((payment) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully deleted payment',
        data: payment,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

const updatePayment = async (req, res) => {
  const id = req.params.id;
  const data = {
    transaction_id: req.body.transaction_id,
    type: req.body.type,
    amount: req.body.amount,
  };
  paymentService
    .updatePayment(id, data)
    .then((payment) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully updated payment',
        data: payment,
      });
    })
    .catch((error) => {
      res.status(500).send({
        status: 'error',
        message: error.message,
        data: {},
      });
    });
};

module.exports = {
  createPayment,
  deletePayment,
  updatePayment,
};
