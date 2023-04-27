"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: "id",
        as: "add_id_user",
      });
    }
  }
  address.init(
    {
      user_id: DataTypes.INTEGER,
      address_name: DataTypes.STRING,
      receiver_name: DataTypes.STRING,
      street_address: DataTypes.STRING,
      postal_code: DataTypes.INTEGER,
      city: DataTypes.STRING,
      province: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "address",
    }
  );
  return address;
};
