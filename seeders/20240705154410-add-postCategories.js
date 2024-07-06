'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Post_Categories',
      [
        {
          postId: 1,
          categoryId: 1
        },
        {
          postId: 1,
          categoryId: 5
        },
        {
          postId: 1,
          categoryId: 6
        },
        {
          postId: 2,
          categoryId: 2
        },
        {
          postId: 2,
          categoryId: 3
        },
        {
          postId: 2,
          categoryId: 6
        },
        {
          postId: 3,
          categoryId: 2
        },
        {
          postId: 3,
          categoryId: 6
        },
        {
          postId: 4,
          categoryId: 1
        },
        {
          postId: 4,
          categoryId: 5
        },
        {
          postId: 5,
          categoryId: 4
        },
        {
          postId: 5,
          categoryId: 7
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Post_Categories', null, {});
  }
};
