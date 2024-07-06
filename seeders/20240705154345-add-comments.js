'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          name: 'NewbieCoder',
          email: 'newbiecoder@email.com',
          text: 'Artikel yang sangat membantu! Saya baru memulai perjalanan coding dan ini memberikan gambaran yang jelas.',
          postId: 1
        },
        {
          name: 'TechEnthusiast',
          email: 'techenthusiast@email.com',
          text: 'Saya setuju bahwa praktek adalah kunci. Adakah saran untuk proyek pemula yang bisa dicoba?',
          postId: 1
        },
        {
          name: 'CareerShifter',
          email: 'careershifter@email.com',
          text: 'Terima kasih atas panduannya. Apakah ada rekomendasi bootcamp atau kursus online untuk pemula?',
          postId: 1
        },
        {
          name: 'HealthyEater',
          email: 'healthyeater@email.com',
          text: 'Smoothie bowl ini terlihat lezat! Saya akan mencobanya besok pagi.',
          postId: 2
        },
        {
          name: 'NutritionNerd',
          email: 'nutritionnerd@email.com',
          text: 'Bisakah kita mengganti susu almond dengan susu kedelai? Apakah akan mempengaruhi rasanya?',
          postId: 2
        },
        {
          name: 'BusyMom',
          email: 'busymom@email.com',
          text: 'Saya suka resep yang cepat dan mudah seperti ini. Sempurna untuk pagi yang sibuk!',
          postId: 2
        },
        {
          name: 'StressedStudent',
          email: 'stressedstudent@email.com',
          text: 'Terima kasih atas tipsnya! Saya akan mencoba ini saat istirahat belajar.',
          postId: 3
        },
        {
          name: 'YogaTeacher',
          email: 'yogateacher@email.com',
          text: 'Pose-pose ini memang sangat efektif untuk meredakan stres. Saya sering mengajarkannya di kelas pemula.',
          postId: 3
        },
        {
          name: 'MindfulnessNewbie',
          email: 'mindfulnessnewbie@email.com',
          text: 'Apakah ada rekomendasi untuk aplikasi yoga yang bagus bagi pemula?',
          postId: 3
        },
        {
          name: 'JSLearner',
          email: 'jslearner@email.com',
          text: 'Penjelasan yang bagus tentang Promises! Bisakah Anda memberikan contoh penggunaan dalam situasi nyata?',
          postId: 4
        },
        {
          name: 'BackendDev',
          email: 'backenddev@email.com',
          text: 'Saya sering menggunakan Promises dalam proyek Node.js. Mereka sangat membantu dalam menangani operasi asynchronous.',
          postId: 4
        },
        {
          name: 'CodeNewbie',
          email: 'codenewbie@email.com',
          text: 'Konsep ini masih membingungkan bagi saya. Adakah sumber belajar lain yang direkomendasikan?',
          postId: 4
        },
        {
          name: 'SoccerFan',
          email: 'soccerfan@email.com',
          text: 'Artikel yang menarik! Saya tidak tahu bahwa sepak bola modern berakar dari permainan di Tiongkok kuno.',
          postId: 5
        },
        {
          name: 'HistoryBuff',
          email: 'historybuff@email.com',
          text: 'Evolusi sepak bola sangat mencerminkan perubahan sosial dan teknologi. Bagaimana menurut Anda teknologi akan mempengaruhi sepak bola di masa depan?',
          postId: 5
        },
        {
          name: 'SportsTeacher',
          email: 'sportsteacher@email.com',
          text: 'Saya sering menceritakan sejarah ini kepada murid-murid saya. Ini membantu mereka memahami pentingnya aturan dan fair play dalam olahraga.',
          postId: 5
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
