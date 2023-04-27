"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      stock: {
        type: Sequelize.INTEGER,
      },
      sold: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.ENUM(
          "Hobby",
          "Houseware",
          "Stationery",
          "Electronics",
          "Fashion",
          "Kitchenware",
          "Beauty",
          "Books",
          "Footwear",
          "Other"
        ),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
