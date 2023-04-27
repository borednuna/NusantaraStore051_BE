'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('product_details', [
      {
        product_id: 1,
        weight: 0.5,
        dimensions: '5.9cm x 0.73cm x 8.46cm',
        color: '-',
        size: '-',
        material: 'Paperback'
      },
      {
        product_id: 2,
        weight: 0.5,
        dimensions: '10.16cm x 17.78cm',
        color: '-',
        size: '-',
        material: 'Paperback'
      },
      {
        product_id: 3,
        weight: 0.5,
        dimensions: '10.16cm x 17.78cm',
        color: '-',
        size: '-',
        material: 'Vinyl'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
