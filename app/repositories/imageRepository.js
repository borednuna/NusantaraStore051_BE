const { image } = require('../models');

const createImage = (data) => {
  return image.create(data);
};

const updateImage = (data, id) => {
  return image.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteImage = (id) => {
  return image.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  createImage,
  updateImage,
  deleteImage,
};
