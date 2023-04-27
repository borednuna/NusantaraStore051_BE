'use strict';

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
    await queryInterface.bulkInsert('addresses', [
      {
        user_id: 1,
        address_name: 'Rumah',
        receiver_name: 'Emaknya Nuna',
        street_address: 'Jl. Raya Cipinang Jaya No. 88',
        postal_code: 13410,
        city: 'Jakarta Timur',
        province: 'DKI Jakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        address_name: 'Kosan',
        receiver_name: 'Nuna',
        street_address: 'Jl. Arif Rahman Hakim No. 48B',
        postal_code: 60111,
        city: 'Surabaya',
        province: 'Jawa Timur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        address_name: 'Rumah',
        receiver_name: 'John',
        street_address: 'Jl. Raya Cipinang Jaya No. 88',
        postal_code: 13410,
        city: 'Jakarta Timur',
        province: 'DKI Jakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        address_name: 'Rumah',
        receiver_name: 'Jane',
        street_address: 'Jl. Raya Cipinang Jaya No. 88',
        postal_code: 13410,
        city: 'Jakarta Timur',
        createdAt: new Date(),
        updatedAt: new Date(),
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
