'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailed_wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.wishlist, {
        foreignKey: 'id',
        as: 'dw_id_wishlist',
      });

      this.belongsTo(models.product, {
        foreignKey: 'id',
        as: 'dw_id_product',
      });
    }
  }
  detailed_wishlist.init(
    {
      wishlist_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'detailed_wishlist',
    },
  );
  return detailed_wishlist;
};
