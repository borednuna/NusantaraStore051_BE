const transactionService = require('../services/transactionService');

const createTransaction = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
    status: req.body.status,
  };
  transactionService
    .createTransaction(data)
    .then((transaction) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully created transaction',
        data: transaction,
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

const deleteTransaction = async (req, res) => {
  const id = req.params.id;
  transactionService
    .deleteTransaction(id)
    .then((transaction) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully deleted transaction',
        data: transaction,
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

const updateTransaction = async (req, res) => {
  const id = req.params.id;
  const data = {
    status: req.body.status,
  };
  transactionService
    .updateTransaction(id, data)
    .then((transaction) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully updated transaction',
        data: transaction,
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
  createTransaction,
  deleteTransaction,
  updateTransaction,
};
