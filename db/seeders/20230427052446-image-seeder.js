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
    await queryInterface.bulkInsert('images', [
      {
        product_id: 1,
        name: '1',
        url: 'https://down-id.img.susercontent.com/file/id-11134207-23030-g8adgfcdweovbe',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        name: '1',
        url: 'https://down-id.img.susercontent.com/file/sg-11134201-23010-68iznmh6g9lvce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        name: '2',
        url: 'https://down-id.img.susercontent.com/file/sg-11134201-23010-znutjqh6g9lv69',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        name: '3',
        url: 'https://down-id.img.susercontent.com/file/sg-11134201-23010-v9r3fkh6g9lvc8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        name: '1',
        url: 'https://i.ebayimg.com/images/g/M6kAAOSwVoFfD4cj/s-l500.jpg',
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
