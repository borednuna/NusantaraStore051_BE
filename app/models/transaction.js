'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'id',
        as: 'tr_id_user',
      });

      this.hasOne(models.payment, {
        foreignKey: 'id',
        as: 'py_id_transaction',
      });

      this.hasOne(models.address, {
        foreignKey: 'id',
        as: 'add_id_transaction',
      });

      this.belongsToMany(models.product, {
        through: 'detailed_transaction',
        foreignKey: 'id',
        as: 'tr_id_product',
      });
    }
  }
  transaction.init(
    {
      user_id: DataTypes.INTEGER,
      address_id: DataTypes.INTEGER,
      status: DataTypes.ENUM('pending', 'packing', 'delivering', 'received'),
    },
    {
      sequelize,
      modelName: 'transaction',
    },
  );
  return transaction;
};
