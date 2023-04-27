const router = require("express").Router();
const addressController = require("../controllers/addressController");

router.post("/", addressController.createAddress);
router.put("/:id", addressController.updateAddress);
router.delete("/:id", addressController.deleteAddress);

module.exports = router;
