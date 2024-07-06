'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Pengembangan Web',
          description: 'Tutorial dan tips seputar pengembangan web'
        },
        {
          name: 'Kesehatan & Kebugaran',
          description: 'Informasi dan saran untuk gaya hidup sehat'
        },
        {
          name: 'Resep & Kuliner',
          description: 'Berbagai resep dan eksplorasi dunia kuliner'
        },
        {
          name: 'Olahraga',
          description: 'Berita dan analisis dari dunia olahraga'
        },
        {
          name: 'Teknologi',
          description: 'Perkembangan terbaru dalam dunia teknologi'
        },
        {
          name: 'Gaya Hidup',
          description: 'Tips dan tren gaya hidup modern'
        },
        {
          name: 'Sejarah',
          description: 'Eksplorasi peristiwa dan tokoh bersejarah'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
