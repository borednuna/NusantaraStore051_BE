const router = require("express").Router();
const cartController = require("../controllers/cartController");

router.get("/:id", cartController.getCartById);
router.post("/", cartController.createCart);
router.delete("/:id", cartController.deleteCart);

module.exports = router;
