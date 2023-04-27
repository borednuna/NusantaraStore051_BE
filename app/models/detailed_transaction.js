"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class detailed_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.transaction, {
        foreignKey: "id",
        as: "dt_id_transaction",
      });

      this.belongsTo(models.product, {
        foreignKey: "id",
        as: "dt_id_product",
      });
    }
  }
  detailed_transaction.init(
    {
      transaction_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      item_amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "detailed_transaction",
    }
  );
  return detailed_transaction;
};
