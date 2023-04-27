'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, {
        foreignKey: 'id',
        as: 'pd_id_product',
      });

      this.hasOne(models.image, {
        foreignKey: 'id',
        as: 'im_id_product_details',
      });
    }
  }
  product_details.init(
    {
      product_id: DataTypes.INTEGER,
      weight: DataTypes.DOUBLE,
      dimensions: DataTypes.STRING,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      material: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'product_details',
    },
  );
  return product_details;
};
