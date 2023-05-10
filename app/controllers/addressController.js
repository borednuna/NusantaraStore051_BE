const addressService = require('../services/addressService');

const getAddressByUserId = async (req, res) => {
  const user_id = req.params.user_id;
  addressService
    .getAddressByUserId(user_id)
    .then((address) => {
      if (!address) {
        res.status(404).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Successfully retrieved address',
          data: address,
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

const createAddress = async (req, res) => {
  const data = {
    user_id: req.body.user_id,
  };
  addressService
    .createAddress(data)
    .then((address) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully created address',
        data: address,
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

const updateAddress = async (req, res) => {
  const id = req.params.id;
  const data = {
    user_id: req.body.user_id,
    address_name: req.body.address_name,
    receiver_name: req.body.receiver_name,
    street_address: req.body.street_address,
    postal_code: req.body.postal_code,
    city: req.body.city,
    province: req.body.province,
  };
  addressService
    .updateAddress(id, data)
    .then((address) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully updated address',
        data: address,
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

const deleteAddress = async (req, res) => {
  const id = req.params.id;
  addressService
    .deleteAddress(id)
    .then((address) => {
      res.status(200).send({
        status: 'success',
        message: 'Successfully deleted address',
        data: address,
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
  getAddressByUserId,
  createAddress,
  updateAddress,
  deleteAddress,
};
