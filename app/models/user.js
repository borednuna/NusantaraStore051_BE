'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.cart, {
        foreignKey: 'id',
        as: 'ct_id_user'
      })

      this.hasMany(models.address, {
        foreignKey: 'id',
        as: 'add_id_user'
      });

      this.hasMany(models.transaction, {
        foreignKey: 'id',
        as: 'tr_id_user'
      })

      this.hasMany(models.product, {
        foreignKey: 'id',
        as: 'pr_id_user'
      })

      this.hasMany(models.review, {
        foreignKey: 'id',
        as: 'rv_id_user'
      })
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    is_seller: DataTypes.BOOLEAN,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};