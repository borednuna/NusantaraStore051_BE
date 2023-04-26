'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.transaction, {
        foreignKey: 'id',
        as: 'py_id_transaction'
      })
    }
  }
  payment.init({
    transaction_id: DataTypes.INTEGER,
    type: DataTypes.ENUM('ovo', 'gopay', 'dana', 'bank_transfer', 'cash_on_delivery'),
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};