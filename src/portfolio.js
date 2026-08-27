/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "DWI",
  title: "Hii !!!, DWI ANANDA RIZKI SAPUTRA",
  subTitle: emoji(
    "Saya adalah seorang Full Stack Developer 🚀 yang fokus mengembangkan aplikasi web fungsional dan user-friendly menggunakan PHP, MySQL, JavaScript, HTML, dan CSS. Saya juga memiliki pengalaman dalam pengolahan serta klasifikasi data memanfaatkan Python, Machine Learning, dan Natural Language Processing (NLP). Terbiasa bekerja secara sistematis, adaptif, dan berorientasi pada ketelitian standar sistem. Saat ini, saya terbuka untuk peluang proyek freelance, program magang, maupun posisi Full-Stack Developer / Software Engineer"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rizkisaputra240",
  linkedin: "https://www.linkedin.com/in/dwianandarizkisaputra",
  gmail: "",
  facebook: "https://www.facebook.com/Dwianandarizkisaputra/",
  instagram: "https://www.instagram.com/rizki.saputra_240",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Keahlian",
  subTitle: "Fullstack Developer | Software Developer yang antusias",
  skills: [
    emoji(
      "⚡ Membuat tampilan antarmuka web yang responsif dan mudah digunakan serta menyesuaikan desain dengan kebutuhan sistem."
    ),
    emoji(
      "⚡ Membangun sistem informasi berbasis web dengan fitur autentikasi, multi-role user, CRUD, pengelolaan database, serta laporan sesuai kebutuhan pengguna."
    ),
    emoji(
      "⚡ Mengolah dan menganalisis data menggunakan Python, termasuk penerapan Machine Learning dan Natural Language Processing (NLP) untuk klasifikasi teks."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  softwareSkills: [
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Duta Bangsa Kota Surakarta",
      logo: require("./assets/images/UDBLOGO.jpg"),
      subHeader: "Sarjana - Ilmu Komputer / Teknik Informatika",
      duration: "September 2022 – oktober 2026",
      desc: "Berfokus pada pengembangan perangkat lunak, pengembangan web, basis data, serta Machine Learning",
      descBullets: [
        "Mengembangkan berbagai proyek akademik berbasis web dan pengolahan data.",
        "Memiliki pengalaman penelitian, publikasi ilmiah, serta pengembangan model klasifikasi teks menggunakan Python."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT & Data Entry Intern",
      company: "Badan Pusat Statistik Kota Surakarta",
      companylogo: require("./assets/images/BPSLOGO.png"),
      date: "Agustus 2025 – Desember 2025",
      desc: "Menjalankan peran teknis dan operasional TI selama masa magang: • Pengembangan Sistem: Merancang dan membangun aplikasi sistem informasi manajemen berbasis web (SIMA) untuk digitalisasi alur kerja data instansi. • Entri & Manajemen Data: Menginput, memverifikasi, dan mengelola basis data operasional secara terstruktur dan akurat. • Desain Visual: Merancang materi grafis dan aset visual untuk kebutuhan informasi serta dokumentasi instansi.",
      descBullets: [
        "Full-Stack Development",
        "Data Entry",
        "Database Management",
        "Graphic Design",
      ]
    }
    /*
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
      */
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some Proyek you have worked on

const bigProjects = {
  title: "Proyek",
  subtitle:
    "BEBERAPA PROYEK PENGEMBANGAN WEB DAN SISTEM YANG PERNAH SAYA BANGUN",
  projects: [
    {
      image: require("./assets/images/Hoodie Dwie.jpg"),
      projectName: "Sistem Hoodie Dwie Website E-Commerce",
      projectDesc:
        "Merancang dan membangun website e-commerce penjualan produk fashion dan hoodie menggunakan HTML, CSS, dan JavaScript. Dilengkapi fitur katalog produk, keranjang belanja, simulasi checkout pembayaran, serta halaman informasi lengkap.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/hoodie-dwie-ecommerce.git"
        }
      ]
    },

    {
      image: require("./assets/images/Sistem Manajemen Mahasiswa Magang.png"),
      projectName: "Sistem Manajemen Mahasiswa Magang",
      projectDesc:
        "Merancang dan membangun Sistem Informasi Manajemen (SIMA) berbasis web selama masa magang di Badan Pusat Statistik (BPS) Kota Surakarta. Sistem ini dibangun untuk mendigitalkan dan mengoptimalkan pengelolaan data mahasiswa magang secara terstruktur menggunakan PHP dan MySQL.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/Sistem-Manajemen-Mahasiswa-Magang.git"
        }
      ]
    },
    {
      image: require("./assets/images/Poli KIA.png"),
      projectName: "Sistem Informasi Pelayanan Poli KIA Berbasis Web",
      projectDesc:
        "Merancang dan membangun Sistem Informasi Pelayanan Poli KIA berbasis web menggunakan PHP dan MySQL. Sistem ini dirancang untuk mengelola data ibu hamil, pendaftaran, rekam medis pemeriksaan, jadwal kontrol, serta laporan pelayanan dengan fitur hak akses (multi-role) untuk Bidan, Dokter, dan Pasien.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/Sistem-Informasi-Pelayanan-Poli-KIA-Berbasis-Web.git"
        }
      ]
    },
    {
      image: require("./assets/images/Karyawan Berbasis.png"),
      projectName:
        "Sistem Informasi Perizinan Keluar-Masuk Karyawan Berbasis Web",
      projectDesc:
        "Merancang dan membangun Sistem Informasi Perizinan Keluar-Masuk Karyawan berbasis web untuk Badan Pusat Statistik (BPS) Kota Surakarta menggunakan PHP dan MySQL. Sistem ini dirancang untuk mencatat dan memantau izin karyawan saat jam kerja, lengkap dengan fitur pengajuan izin, lampiran, riwayat, serta pembagian hak akses (multi-role) antara Karyawan dan Admin.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/Sistem-Informasi-Perizinan-Keluar-Masuk-Karyawan-Berbasis-Web.git"
        }
      ]
    },
    {
      image: require("./assets/images/web pengaduan masyarakat.png"),
      projectName: "Sistem Pengaduan Masyarakat Berbasis Web",
      projectDesc:
        "Berkolaborasi dalam merancang dan membangun Sistem Informasi Pengaduan Masyarakat berbasis web menggunakan PHP dan MySQL untuk memfasilitasi pelaporan dan pengelolaan aspirasi publik. Sistem ini menerapkan fitur hak akses multi-role (Admin, Petugas, dan Masyarakat) dengan antarmuka responsif berbasis Materialize CSS dan DataTables.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/pengaduan-masyarakat-php-mysql.git"
        }
      ]
    },
    {
      image: require("./assets/images/Informasi Beasiswa.png"),
      projectName: "Aplikasi Informasi Beasiswa",
      projectDesc:
        "Berkolaborasi dalam merancang aplikasi mobile berbasis Flutter yang terintegrasi dengan Firebase untuk pendaftaran dan pengelolaan informasi beasiswa. Fitur mencakup autentikasi pengguna, profil, daftar beasiswa, serta riwayat pendaftaran secara real-time.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/scholarship-information-app-flutter.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/pengaduan masyarakat.png"),
      projectName: "Aplikasi Sistem Informasi Pengaduan Masyarakat Berbasis",
      projectDesc:
        "Berkolaborasi dalam merancang aplikasi layanan pengaduan masyarakat secara full-stack untuk memfasilitasi pelaporan warga dan monitoring status laporan secara transparan. Mengimplementasikan antarmuka responsif, manajemen basis data, validasi formulir input, dan alur pemrosesan laporan.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/Sistem-Informasi-Pengaduan-Masyarakat-Berbasis-Aplikasi.git"
        }
      ]
    },
    {
      image: require("./assets/images/Restaurant POS System.png"),
      projectName: "Aplikasi Restaurant POS System – VB.NET & MySQL",
      projectDesc:
        "Berkolaborasi dalam merancang dan membangun aplikasi kasir restoran berbasis desktop menggunakan VB.NET Windows Forms dan MySQL. Sistem dilengkapi fitur manajemen menu, data member dengan diskon khusus, pemrosesan transaksi penjualan secara lengkap, serta pencetakan laporan otomatis menggunakan Microsoft ReportViewer.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/restaurant-pos-vbnet-mysql.git"
        }
      ]
    },
    {
      image: require("./assets/images/Klasifikasi Buah Segar dan Busuk.png"),
      projectName: "Klasifikasi Buah Segar & Busuk (CNN)",
      projectDesc:
        "Membangun model Deep Learning menggunakan Convolutional Neural Network (CNN), TensorFlow, dan Keras untuk mengklasifikasikan kondisi buah segar dan busuk. Model berhasil mencapai akurasi validasi sebesar 96,10%.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/fruit-classification-cnn.git"
        }
      ]
    },
    {
      image: require("./assets/images/bps.png"),
      projectName: "Klasifikasi Kualitas Logbook Magang BPS",
      projectDesc:
        "Membangun model Machine Learning untuk mengklasifikasikan kualitas logbook magang BPS menggunakan algoritma Multinomial Naive Bayes (Python & Google Colab). Berhasil mencapai tingkat akurasi tinggi sebesar 90,16% dari 2.134 data teks dengan tahapan preprocessing lengkap dan ekstraksi fitur TF-IDF.",
      footerLink: [
        {
          name: "Kunjungi",
          url: "https://github.com/Rizkisaputra240/projek-klasifikasi.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Sertifikat & Prestasi 🏆 "),
  subtitle:
    "DAFTAR SERTIFIKASI RESMI DAN KOMPETENSI PROFESIONAL YANG TELAH SAYA RAIH !",

  achievementsCards: [
    {
      title:
        "Sertifikat Kompetensi Pemrogram Web Yunior (Junior Web Programmer)",
      subtitle:
        "Diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Telematika Profesional Indonesia. Membuktikan kompetensi profesional dalam merancang, membangun, dan menguji aplikasi web sesuai standar industri.",
      image: require("./assets/images/Junior Web Programmer.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Credential ID: TIK.002 000285 2026",
          url: "#"
        }
      ]
    },
    {
      title:
        "Solo Techno On Ramadhan 2.0 (Solo Technopark)",
      subtitle:
        "Diterbitkan oleh Solo Techno Incubator (Solo Technopark) atas partisipasi intensif dalam materi Digital Foundation, Cyber Security, AI Framework, hingga AI Automation Hackathon.",
      image: require("./assets/images/sertif solo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Credential ID: 139/STP/Trn.STOR-2.0/03/2026",
          url: "#"
        }
      ]
    },
    {
      title:
        "International Guest Lecture: Machine Learning",
      subtitle:
        "Diselenggarakan oleh Universitas Sebelas Maret (UNS) bersama pemateri dari Khalifa University UAE, membahas fondasi matematika Aljabar Linear dalam pembentukan pola dan pemodelan Machine Learning",
      image: require("./assets/images/Sertifikat Kuliah Tamu.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Credential ID: 120.1/UN27.09.3.1/PK.01.03/2024",
          url: "#"
        }
      ]
    },
    {
      title:
        "AI for Web Programming: Building Interface",
      subtitle:
        "Diselenggarakan oleh HMPTI Universitas Duta Bangsa Surakarta, membahas integrasi dan pemanfaatan pemrograman AI dalam membangun antarmuka web modern",
      image: require("./assets/images/Webinar AI for Web Programming.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Credential ID: HMPTI168317891799577",
          url: "#"
        }
      ]
    },
    {
      title:
        "AI Untuk Programmer: Rapid Coding",
      subtitle:
        "Diselenggarakan oleh Fakultas Ilmu Komputer UDB, mempelajari efisiensi penulisan dan optimasi kode program menggunakan teknologi kecerdasan buatan.",
      image: require("./assets/images/AI Untuk Programmer Rapid Coding.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Credential ID: 723/UDB.D1/A.36-KM/VI/2025",
          url: "#"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publikasi",
  subtitle:
    "KARYA TULIS ILMIAH DAN PENELITIAN AKADEMIS YANG TELAH DIPUBLIKASIKAN.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://ojs.udb.ac.id/Senatib/article/view/4644/3101",
      title:
        "Analisis Pengaruh Sistem Keamanan Informasi Perbankan pada Nasabah Pengguna Internet Banking BRI",
      description:
        "Menganalisis urgensi tata kelola keamanan informasi dan mitigasi risiko operasional pada layanan Internet Banking BRI, serta strategi penguatan transaksi digital untuk menjaga kepercayaan nasabah."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "CV / Resume",
  subtitle: "Silakan unduh CV resmi saya di sini",
  link: "/CVDWIE.pdf", // Sesuaikan dengan nama file PDF yang Anda simpan di folder public
  display: true // Set true untuk menampilkan bagian ini
};

const contactInfo = {
  title: emoji("KONTAK SAYA ☎️"),
  subtitle:
    "Ingin membahas proyek atau sekadar menyapa? Kotak masuk saya terbuka untuk siapa saja.",
  number: "+62 895-1823-8826",
  email_address: "rizkibarker15@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
