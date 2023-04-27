const userService = require("../services/userService");

const getUserById = async (req, res) => {
  const id = req.params.id;
  userService.getUserById(id).then((users) => {
    if (!users) {
      res.status(404).send({
        status: "error",
        message: error.message,
        data: {},
      });
    } else {
      res.status(200).send({
        status: "success",
        message: "Successfully retrieved user",
        data: users,
      });
    }
  });
};

const getUserByName = async (req, res) => {
  const name = req.params.name;
  userService.getUserByName(name).then((users) => {
    if (!users) {
      res.status(404).send({
        status: "error",
        message: error.message,
        data: {},
      });
    } else {
      res.status(200).send({
        status: "success",
        message: "Successfully retrieved users",
        data: users,
      });
    }
  });
};

const getSellerByName = async (req, res) => {
  const name = req.params.seller_name;
  userService.getSellerByName(seller_name).then((sellers) => {
    if (!sellers) {
      res.status(404).send({
        status: "error",
        message: error.message,
        data: {},
      });
    } else {
      res.status(200).send({
        status: "success",
        message: "Successfully retrieved sellers",
        data: sellers,
      });
    }
  });
};

const createUser = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    is_seller: req.body.is_seller,
    password: req.body.password,
  };
  userService
    .createUser(data)
    .then((user) => {
      res.status(200).send({
        status: "success",
        message: "Successfully created user",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "error",
        message: error.message,
        data: {},
      });
    });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  userService
    .updateUser(req.body, id)
    .then((user) => {
      res.status(200).send({
        status: "success",
        message: "Successfully updated user",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "error",
        message: error.message,
        data: {},
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  userService
    .deleteUser(id)
    .then((user) => {
      res.status(200).send({
        status: "success",
        message: "Successfully removed user",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "error",
        message: error.message,
        data: {},
      });
    });
};

module.exports = {
  getUserById,
  getUserByName,
  getSellerByName,
  createUser,
  updateUser,
  deleteUser,
};
