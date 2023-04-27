'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.product_details, {
        foreignKey: 'id',
        as: 'pd_id_product',
      });

      this.hasMany(models.review, {
        foreignKey: 'id',
        as: 'rv_id_product',
      });

      this.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'pr_id_user',
      });

      this.belongsToMany(models.transaction, {
        through: 'detailed_transaction',
        foreignKey: 'product_id',
        as: 'pr_id_transaction',
      });

      this.belongsToMany(models.cart, {
        through: 'detailed_cart',
        foreignKey: 'product_id',
        as: 'pr_id_cart',
      });

      this.belongsToMany(models.wishlist, {
        through: 'detailed_wishlist',
        foreignKey: 'product_id',
        as: 'pr_id_wishlist',
      });
    }
  }
  product.init(
    {
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      sold: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      category: DataTypes.ENUM(
        'Hobby',
        'Houseware',
        'Stationery',
        'Electronics',
        'Fashion',
        'Kitchenware',
        'Beauty',
        'Books',
        'Footwear',
        'Other',
      ),
    },
    {
      sequelize,
      modelName: 'product',
    },
  );
  return product;
};
