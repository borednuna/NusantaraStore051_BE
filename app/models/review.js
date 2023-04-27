"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: "id",
        as: "rv_id_user",
      });

      this.belongsTo(models.product, {
        foreignKey: "id",
        as: "rv_id_product",
      });
    }
  }
  review.init(
    {
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      star: DataTypes.DOUBLE,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
