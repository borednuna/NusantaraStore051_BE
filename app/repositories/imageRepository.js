const { image } = require('../models');

const getAllImage = () => {
  return image.findAll();
};

const getImageByProductId = (id) => {
  return image.findAll({
    where: {
      product_id: id,
    },
  })
}

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
  getAllImage,
  getImageByProductId,
  createImage,
  updateImage,
  deleteImage,
};
