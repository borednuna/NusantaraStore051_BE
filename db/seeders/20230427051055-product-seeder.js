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
   await queryInterface.bulkInsert('products', [
    {
      user_id: 1,
      name: 'Paulo Coelho - The Alchemist English ORIGINAL',
      price: 62000,
      stock: 5,
      sold: 1,
      description: 'Kondisi buku sudah menguning, bersampul, layak baca.',
      category: 'Books'
    },
    {
      user_id: 1,
      name: 'Haruki Murakami - Kafka On The Shore (ORIGINAL)',
      price: 75000,
      stock: 5,
      sold: 2,
      description: "Kafka on the Shore is a metaphor. It follows no rules, it doesn’t adhere to reason, and applicability is not an issue. It fills you up, it tears you down. A fugue of emotions are present, you can’t seem to figure out which of the many different realizations flooding you is most important. Waves roll up again and again on the beach of your consciousness and at first you resist, but after a while you understand that your struggle is pointless, so you give in. You read, you feel, you try to understand, you try to make sense. And you know what? You love it. I don’t think I can adequately get the gist of a Murakami experience on a goodreads review. It’s something else, something you have to experience for yourself. I will try, but I know I shall fail. You have to realize that reading Murakami requires a unity of perception and feeling. I can try to make you understand certain concepts found in the book, but I will fall short on the sensory part. Murakami’s strength is the feeling he wraps around his teachings. He’s a surrealist painter, a musician, an oddity that weaves consciousness with pop-culture and makes it work. People say his works are easily accessible yet elegantly complex, I whole-heartedly agree. His style is so rich and resonant that it can dabble into lunacy without any sort of urgency. He isn’t regulated in any way, a writer free from normative paradigms and moral constraints. He’s pretty strange, but trust me, it’s awesome the way he writes. Okay, I’m gonna stop myself here. All I’m going to say is try it, experience it. See for yourself.",
      category: 'Books'
    },
    {
      user_id: 2,
      name: 'The Beatles - Abbey Road (Vinyl)',
      price: 500000,
      stock: 5,
      sold: 3,
      description: 'Abbey Road is the 11th studio album by British rock group The Beatles, released on September 26, 1969 in Great Britain and Germany. In the UK it was their twelfth album including the compilation album. In Germany it was their 15th album including the compilation albums. It was released in the US on October 1, 1969, where it was their 18th album.'
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
