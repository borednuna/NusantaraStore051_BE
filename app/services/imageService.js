const imageRepository = require('../repositories/imageRepository');

const createImage = async (data) => {
  try {
    const image = imageRepository.createImage(data);
    return image;
  } catch (error) {
    return error;
  }
};

const updateImage = async (id, data) => {
  try {
    const image = imageRepository.updateImage(data, id);
    return image;
  } catch (error) {
    return error;
  }
};

const deleteImage = async (id) => {
  try {
    const image = imageRepository.deleteImage(id);
    return image;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createImage,
  updateImage,
  deleteImage,
};
