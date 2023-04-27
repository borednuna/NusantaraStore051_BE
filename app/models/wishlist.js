'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'wl_id_user',
      });

      this.belongsToMany(models.product, {
        through: 'detailed_wishlist',
        foreignKey: 'wishlist_id',
        as: 'wl_id_product',
      });
    }
  }
  wishlist.init(
    {
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'wishlist',
    },
  );
  return wishlist;
};
