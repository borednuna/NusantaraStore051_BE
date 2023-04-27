'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailed_cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cart, {
        foreignKey: 'id',
        as: 'dc_id_cart',
      });

      this.belongsTo(models.product, {
        foreignKey: 'id',
        as: 'dc_id_product',
      });
    }
  }
  detailed_cart.init(
    {
      cart_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      item_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'detailed_cart',
    },
  );
  return detailed_cart;
};
