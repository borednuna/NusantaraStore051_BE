const router = require('express').Router();
const imageController = require('../controllers/imageController');

router.get('/', imageController.getAllImage);
router.get('/:id', imageController.getImageByProductId);
router.post('/', imageController.createImage);
router.put('/:id', imageController.updateImage);
router.delete('/:id', imageController.deleteImage);

module.exports = router;
