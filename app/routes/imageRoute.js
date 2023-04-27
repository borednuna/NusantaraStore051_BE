const router = require('express').Router();
const imageController = require('../controllers/imageController');

router.post('/', imageController.createImage);
router.put('/:id', imageController.updateImage);
router.delete('/:id', imageController.deleteImage);

module.exports = router;
