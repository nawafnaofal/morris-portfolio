import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mi.jpg',
    title: 'Madrasah Ibtidayah Mathlaul Anwar',
    info: 'MI MATHLAUL ANWAR adalah salah satu satuan pendidikan dengan jenjang MI di -, Kec. Cipunagara, Kab. Subang, Jawa Barat. Dalam menjalankan kegiatannya, MIS MATHLAUL ANWAR berada di bawah naungan Kementerian Agama',
    info2: '',
    url: 'https://data-sekolah.sekolah-kita.net/sekolah/MIS%20MATHLAUL%20ANWAR_53360',
    // repo: 'https://data-sekolah.sekolah-kita.net/sekolah/MIS%20MATHLAUL%20ANWAR_53360', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'kunir.jpg',
    title: 'MTs PP Darrussalam Kunir',
    info: 'MTs. PP. Darussalam Kunir dalam kiprahnya mencerdaskan bangsa, dalam pola pendidikan terus mengikuti perkembangan zaman yang memadukan Kurikulum Pesantren dengan  kurikulum Pemerintah sehingga lulusan-lulusannya memiliki keseimbangan pengetahuan antara  Agama dan pengetahuan Umum.',
    info2: '',
    url: 'https://web.facebook.com/darussalamkunir',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'man2.jpg',
    title: 'MAN 2 Cirebon',
    info: 'Dalam perkembangannya sampai sekarang pondok pesantren MAN 2 Cirebontelah berusia lebih dari 200 tahun. Para ulama pengasuh pesantren telah banyak mendirikan lembaga pendidikan, baik yang menggunakan sistem pendidikan pesantren maupun yang menggunakan sistem pendidikan formal seperti; Madrasah Diniyah, Ibtida’iyah, Tsanawiyah, dan Aliyah di bawah binaaan Departemen Agama RI, maupun sekolah umum tingkat dasar, SMP, dan SMA di bawah binaan Departemen Pendidikan Nasional.',
    info2: '',
    url: 'https://www.man2cirebon.sch.id/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  kontak: 'https://wa.me/6282127291418',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/nawafnaofal',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/nawafnaufal',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nawaf-naofal-2a061a209/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nawafnaofal',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
