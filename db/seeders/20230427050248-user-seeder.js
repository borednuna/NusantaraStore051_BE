"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        name: "Hanun Shaka",
        email: "hanunshaka02@gmail.com",
        phone: "085156961624",
        is_seller: true,
        password: "nunanuna123",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "085156961624",
        is_seller: true,
        password: "johndoe123",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        phone: "085156961624",
        is_seller: false,
        password: "janedoe123",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
