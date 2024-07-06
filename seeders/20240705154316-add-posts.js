'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          title: 'Memulai Perjalanan sebagai Web Developer: Panduan untuk Pemula',
          author: 'Alex Chen',
          content:
            '<p>Menjadi seorang web developer adalah salah satu karir yang paling menjanjikan di era digital ini. Namun, bagi pemula, memulai perjalanan ini bisa terasa mengintimidasi. Berikut adalah beberapa langkah yang dapat Anda ikuti untuk memulai:</p><p>1. <strong>Pelajari dasar-dasar HTML, CSS, dan JavaScript</strong>: Ketiga bahasa ini adalah fondasi pengembangan web. Mulailah dengan membuat halaman web sederhana menggunakan HTML, lalu tambahkan gaya dengan CSS, dan terakhir fungsionalitas dengan JavaScript.</p><p>2. <strong>Pilih jalur spesialisasi</strong>: Setelah menguasai dasar-dasar, putuskan apakah Anda ingin fokus pada front-end, back-end, atau full-stack development. Masing-masing memiliki skill set dan teknologi yang berbeda untuk dipelajari.</p><p>3. <strong>Praktek, praktek, praktek</strong>: Teori saja tidak cukup. Buatlah proyek-proyek kecil untuk mengasah keterampilan Anda. Mulai dari membuat kalkulator sederhana hingga blog pribadi.</p><p>Ingatlah bahwa perjalanan menjadi web developer adalah maraton, bukan sprint. Tetap konsisten dan jangan takut untuk membuat kesalahan. Setiap error adalah kesempatan untuk belajar!</p>',
          imgUrl: null
        },
        {
          title: 'Resep Smoothie Bowl Sehat untuk Sarapan Energik',
          author: 'Emily Nutrition',
          content:
            '<p>Smoothie bowl telah menjadi tren sarapan sehat yang populer. Tidak hanya lezat, tapi juga penuh nutrisi untuk memulai hari Anda. Berikut resep smoothie bowl yang mudah dan bergizi:</p><p><strong>Bahan-bahan:</strong></p><ul><li>1 pisang beku</li><li>1 cangkir blueberry beku</li><li>1/2 cangkir susu almond</li><li>1 sendok makan biji chia</li><li>1 sendok makan madu (opsional)</li></ul><p><strong>Topping:</strong></p><ul><li>Irisan pisang</li><li>Granola</li><li>Biji bunga matahari</li><li>Potongan stroberi segar</li></ul><p><strong>Cara membuat:</strong></p><ol><li>Blender pisang beku, blueberry, susu almond, biji chia, dan madu hingga halus.</li><li>Tuang ke dalam mangkuk.</li><li>Hias dengan topping pilihan Anda.</li></ol><p>Nikmati smoothie bowl Anda yang segar dan bergizi! Ini adalah cara yang sempurna untuk memulai hari dengan asupan buah-buahan dan serat yang cukup.</p>',
          imgUrl: null
        },
        {
          title: '5 Latihan Yoga Sederhana untuk Meredakan Stres',
          author: 'Sarah Wellness',
          content:
            "<p>Dalam kehidupan yang serba cepat saat ini, stres dapat dengan mudah menumpuk. Yoga adalah cara yang hebat untuk menenangkan pikiran dan tubuh. Berikut 5 pose yoga sederhana yang dapat Anda praktikkan di rumah untuk meredakan stres:</p><ol><li><strong>Child's Pose (Balasana)</strong>: Pose ini membantu menenangkan sistem saraf pusat dan meregangkan punggung.</li><li><strong>Cat-Cow Stretch (Marjaryasana-Bitilasana)</strong>: Gerakan ini meningkatkan fleksibilitas tulang belakang dan meredakan ketegangan di leher dan bahu.</li><li><strong>Downward Facing Dog (Adho Mukha Svanasana)</strong>: Pose ini meregangkan seluruh tubuh dan meningkatkan aliran darah ke otak.</li><li><strong>Seated Forward Bend (Paschimottanasana)</strong>: Membantu menenangkan pikiran dan meregangkan otot-otot punggung.</li><li><strong>Corpse Pose (Savasana)</strong>: Pose relaksasi ini membantu menenangkan sistem saraf dan memberikan kesempatan untuk meditasi singkat.</li></ol><p>Praktikkan pose-pose ini selama 10-15 menit setiap hari untuk hasil terbaik. Ingat untuk selalu bernapas dalam-dalam dan fokus pada sensasi di tubuh Anda saat melakukan setiap pose.</p>",
          imgUrl: null
        },
        {
          title: 'Mengenal JavaScript Promises: Konsep dan Penggunaan',
          author: 'Dev Master',
          content:
            "<p>JavaScript Promises adalah fitur penting dalam pengembangan web modern, terutama ketika berurusan dengan operasi asynchronous. Mari kita bahas konsep dasar dan cara menggunakannya:</p><p><strong>Apa itu Promise?</strong></p><p>Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan dari operasi asynchronous. Ini memungkinkan kita untuk menulis kode asynchronous dengan cara yang lebih terstruktur dan mudah dibaca.</p><p><strong>Struktur Dasar Promise:</strong></p><pre><code>let myPromise = new Promise((resolve, reject) => {<p>Dengan Promise, kita dapat menghindari 'callback hell' dan membuat kode asynchronous yang lebih mudah dikelola. Ini sangat berguna ketika bekerja dengan API, operasi file, atau tugas asynchronous lainnya.</p>",
          imgUrl: null
        },
        {
          title: 'Mengenal Sejarah dan Evolusi Sepak Bola Modern',
          author: 'Football Historian',
          content:
            "<p>Sepak bola, olahraga yang kini dimainkan dan dicintai di seluruh dunia, memiliki sejarah panjang dan menarik. Mari kita telusuri perjalanan evolusinya:</p><p><strong>Awal Mula:</strong> Bentuk awal sepak bola dapat ditelusuri kembali ke Tiongkok kuno, sekitar 2.000 tahun yang lalu. Permainan yang disebut 'cuju' ini melibatkan menendang bola kulit ke dalam jaring kecil.</p><p><strong>Abad Pertengahan:</strong> Di Eropa, berbagai bentuk sepak bola dimainkan dengan aturan yang berbeda-beda. Seringkali permainan ini sangat kasar dan tanpa aturan yang jelas.</p><p><strong>Modernisasi:</strong> Pada tahun 1863, The Football Association (FA) didirikan di Inggris, menandai awal dari sepak bola modern. Aturan-aturan standar mulai ditetapkan, termasuk ukuran lapangan dan jumlah pemain.</p><p><strong>Globalisasi:</strong> Akhir abad ke-19 dan awal abad ke-20 melihat penyebaran sepak bola ke seluruh dunia. FIFA didirikan pada tahun 1904, dan Piala Dunia pertama diadakan pada tahun 1930.</p><p><strong>Era Modern:</strong> Sepak bola terus berkembang dengan introduksi teknologi seperti VAR (Video Assistant Referee) dan analisis data canggih untuk meningkatkan performa tim dan pemain.</p><p>Dari permainan sederhana menjadi industri global multi-miliar dolar, evolusi sepak bola mencerminkan perubahan dalam masyarakat, teknologi, dan budaya populer.</p>",
          imgUrl: null
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
