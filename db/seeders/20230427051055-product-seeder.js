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
    await queryInterface.bulkInsert('products', [
      {
        user_id: 1,
        name: 'Paulo Coelho - The Alchemist English ORIGINAL',
        price: 62000,
        stock: 5,
        sold: 1,
        description: 'Kondisi buku sudah menguning, bersampul, layak baca.',
        category: 'Books',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        name: 'Haruki Murakami - Kafka On The Shore (ORIGINAL)',
        price: 75000,
        stock: 5,
        sold: 2,
        description:
          'Kafka on the Shore is a metaphor. It follows no rules, it doesn’t adhere to reason. It fills you up and tearsyou down. A fugue of emotions are present, you can’t seem to figure out which of the many different realizations flooding you is most important.',
        category: 'Books',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        name: 'The Beatles - Abbey Road (Vinyl)',
        price: 500000,
        stock: 5,
        sold: 3,
        description:
          'Abbey Road is the 11th studio album by British rock group The Beatles, released on September 26, 1969 in Great Britain and Germany. In the UK it was their twelfth album including the compilation album.',
        category: 'Hobby',
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
