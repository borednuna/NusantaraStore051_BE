const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/:id", userController.getUserById);
router.get("/:name", userController.getUserByName);
router.get("/:seller_name", userController.getSellerByName);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;