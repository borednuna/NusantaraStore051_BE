const detailedTransactionService = require('../services/detailedTransactionService');

const createTransactionItem = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
    status: req.body.status,
  };
  detailedTransactionService
    .createTransactionItem(data)
    .then((item) => {
      if (!item) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully created item',
          data: item,
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

const deleteTransactionItem = async (req, res) => {
  const id = req.params.id;
  detailedTransactionService
    .deleteTransactionItem(id)
    .then((item) => {
      if (!item) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully deleted item',
          data: item,
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

const updateTransactionItem = async (req, res) => {
  const id = req.params.id;
  const data = {
    user_id: req.body.user_id,
    status: req.body.status,
  };
  detailedTransactionService
    .updateTransactionItem(id, data)
    .then((item) => {
      if (!item) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully updated item',
          data: item,
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

module.exports = {
  createTransactionItem,
  deleteTransactionItem,
  updateTransactionItem,
};
