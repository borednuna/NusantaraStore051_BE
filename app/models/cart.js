'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'ct_id_user',
      });

      this.belongsToMany(models.product, {
        through: 'detailed_cart',
        foreignKey: 'cart_id',
        as: 'ct_id_product',
      });
    }
  }
  cart.init(
    {
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'cart',
    },
  );
  return cart;
};
