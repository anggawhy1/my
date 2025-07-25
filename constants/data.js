import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNextdotjs, SiBootstrap, SiPhp, SiCodeigniter, SiMysql, SiNodedotjs } from "react-icons/si";
import { FaFileCode, FaAlignLeft, FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export const identity = {
  name: "Angga Dwi Wahyudi",
  division: ["Web Developer", "System Analyst",],
  region: "Indonesia",
  description: [
    "I approach every project with structured thinking, clean execution, and user-focused logic. Whether it’s designing interfaces or analyzing systems, my goal is to deliver solutions that work seamlessly for both users and business processes behind them.",
    "Hello! I’m Angga Dwi Wahyudi — a web developer with strong capabilities in frontend engineering and a solid foundation in system analysis. I focus on building responsive and intuitive interfaces while ensuring they align with user needs and system requirements. With experience across planning, coding, and deployment, I aim to contribute to efficient digital solutions and grow through real-world challenges.",
  ],
  picture: ["/image/about.jpeg", "/image/profil2.png"],
  CV: "/pdf/CV 2.pdf",
};

export const linkList = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Skills",
    href: "experiences",
  },
  {
    title: "Education",
    href: "services",
  },
  {
    title: "Experiences",
    href: "works",
  },

  {
    title: "Portfolio",
    href: "portfolio",
  },
  {
    title: "Certificate",
    href: "certificate",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export const socialMediaList = [
  // {
  //   SocialMediaIcon: FaFacebookF,
  //   href: "https://facebook.com",
  // },
  {
    SocialMediaIcon: FaInstagram,
    href: "https://www.instagram.com/anggawhy_1?igsh=MWkyaTVsZnBseGNpbQ==",
  },
  {
    SocialMediaIcon: FaGithub,
    href: "https://github.com/anggawhy1",
  },
  // {
  //   SocialMediaIcon: FaTiktok,
  //   href: "https://tiktok.com",
  // },
  // {
  //   SocialMediaIcon: FaTwitter,
  //   href: "https://twitter.com",
  // },
];

// export const aboutExperiencesList = [
//   {
//     number: 2,
//     title: "Years Of Experience",
//   },
//   {
//     number: 4,
//     title: "Programming Language Used",
//   },
//   {
//     number: 6,
//     title: "Successed Projects",
//   },
// ];

export const educationList = [
  {
    years: "2022 - Now",
    school: "Alma Ata University",
    competence: "Information System",
  },
  {
    years: "2019 - 2022",
    school: "Darul Ulum Muncar State Vocational High School",
    competence: "Multimedia",
  },

];

export const skillsList = [
  {
    SkillIcon: () => (
      <img
        src="/image/icon/html.png"
        alt="HTML"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "HTML",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/css.png"
        alt="CSS"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "CSS",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/js.png"
        alt="JavaScript"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "JavaScript",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/boostrap.png"
        alt="Bootstrap"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Bootstrap",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/ci.png"
        alt="CodeIgniter"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "CodeIgniter4",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/dart.png"
        alt="Dart"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Dart",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/firebase.png"
        alt="Firebase"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Firebase",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/flutter.png"
        alt="Flutter"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Flutter",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/laravel.png"
        alt="Laravel"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Laravel",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/mysql.png"
        alt="MySQL"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "MySQL",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/nextjs.png"
        alt="Next.js"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Next.js",
    level: "Basic",
  },
  // {
  //   SkillIcon: () => (
  //     <img
  //       src="/image/icon/nodejs.png"
  //       alt="Node.js"
  //       style={{ width: "32px", height: "32px" }}
  //     />
  //   ),
  //   title: "Node.js",
  //   level: "Basic",
  // },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/php.png"
        alt="PHP"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "PHP",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/react.png"
        alt="React"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "React",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/react_native.png"
        alt="React Native"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "React Native",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/semantic.png"
        alt="Semantic UI"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Semantic UI",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/tailwind.png"
        alt="Tailwind CSS"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Tailwind CSS",
    level: "Intermediate",
  },
];

export const toolsList = [
  {
    SkillIcon: () => (
      <img
        src="/image/icon/drawio.png"
        alt="DrawIo"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Drawio",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/git.png"
        alt="Git"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Git",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/github.png"
        alt="GitHub"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "GitHub",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/vscode.png"
        alt="VS Code"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "VS Code",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/xampp.png"
        alt="XAMPP"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "XAMPP",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/postman.png"
        alt="Postman"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Postman",
    level: "Basic",
  },

  // {
  //   SkillIcon: () => (
  //     <img
  //       src="/image/icon/laragon.png"
  //       alt="Laragon"
  //       style={{ width: "32px", height: "32px" }}
  //     />
  //   ),
  //   title: "Laragon",
  //   level: "Basic",
  // },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/corel.png"
        alt="CorelDRAW"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "CorelDRAW",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/figma.png"
        alt="Figma"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Figma",
    level: "Intermediate",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/ps.png"
        alt="Photoshop"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Photoshop",
    level: "Basic",
  },
  {
    SkillIcon: () => (
      <img
        src="/image/icon/Android.png"
        alt="Android Studio"
        style={{ width: "32px", height: "32px" }}
      />
    ),
    title: "Android Studio",
    level: "Basic",
  },
];



export const awardList = [
  {
    years: "September - Desember 2024",
    award: "Completed MSIB Batch 7",
    place: "Maxy Academy",
  },
  {
    years: "10 November - 31 Desember 2024",
    award: "Completed Virtual Internship ",
    place: "Maxy Academy",
  },
  {
    years: "November 2024",
    award: "Best Team – Hackathon #2",
    place: "Maxy Academy",
  },
];

export const exprienceList = [
  {
    years: "Jan 2025 - Sekarang",
    work: "Staf Program Kreativitas Mahasiswa (PKM)",
    time: "Full Time | Onsite",
    company: "Universitas Alma Ata",
    description:
      "Mendampingi mahasiswa dalam menyusun proposal PKM, mendukung kelancaran proses administrasi sesuai jadwal, serta membuat desain visual untuk media sosial sebagai bagian dari promosi dan dokumentasi.",
    techStack: ["/image/icon/figma.png",]
  },
  {
    years: "Ags 2024 - Des 2024",
    work: "Frontend Developer",
    time: "Virtual Internship",
    company: "Maxy Academy",
    description:
      "Berperan sebagai Frontend Developer dalam penyelesaian project case industri. Bertanggung jawab mengimplementasikan UI responsif, integrasi API, dan pengujian ftur menggunakan Laravel dan Tailwind CSS, serta berkolaborasi dalam tim agile untuk menyelesaikan proyek end-to-end sesuai brief dari mitra industri.",
    techStack: ["/image/icon/laravel.png", "/image/icon/tailwind.png", "/image/icon/js.png",]
  },
  {
    years: "Feb 2021 - April 2021",
    work: "Operator & Desain Grafis",
    time: "Full Time | Onsite",
    company: "CV Cahaya Timur Digital Printing",
    description:
      "Melayani kebutuhan desain dan cetak pelanggan, mengoperasikan mesin cetak Indoor & Outdoor, serta melakukan proses finishing seperti laminasi dan pemotongan.",
    techStack: ["/image/icon/corel.png", "/image/icon/ps.png"]
  },
];

export const portfolioList = [
  {
    title: "Posyandu Surobayan",
    subtitle: [
      "/image/icon/ci.png",
      "/image/icon/tailwind.png",
      "/image/icon/js.png",
      "/image/icon/mysql.png",
    ],
    img: "/image/project-2.png",
    description: "Sistem informasi untuk manajemen Posyandu lokal berbasis CodeIgniter4 dan Tailwind CSS.",
    category: "Website",
    github: "https://github.com/anggawhy1/posyandu.git",
    live: "https://posyandusurobayan.com",
  },
  {
    title: "LaporPak",
    subtitle: [
      "/image/icon/laravel.png",
      "/image/icon/tailwind.png",
      "/image/icon/js.png",
      "/image/icon/mysql.png",
    ],
    img: "/image/project-1.png",
    description: "Sistem pelaporan masyarakat berbasis web menggunakan Laravel dan Tailwind CSS.",
    category: "Website",
    github: "https://github.com/anggawhy1/virtualproject.git",
    live: "",
  },
  {
    title: "Sengkala Graduation",
    subtitle: [
      "/image/icon/ci.png",
      "/image/icon/tailwind.png",
      "/image/icon/js.png",
    ],
    img: "/image/project-3.png",
    description: "Sistem informasi untuk manajemen Sengkala Graduation berbasis CodeIgniter4 dan Tailwind CSS.",
    category: "Website",
    github: "https://github.com/your-username/userflow-management-system",
    live: "https://sengkala-graduation.my.id",
  },
  {
    title: "My Portofolio",
    subtitle: [
      "/image/icon/nextjs.png",
      "/image/icon/tailwind.png",
      "/image/icon/js.png",
    ],
    img: "/image/image1.png",
    description: "Website Portofolio.",
    category: "Website",
    github: "https://github.com/anggawhy1/myportofolio.git",
    live: "https://www.anggawhy.my.id/",
  },
  {
    title: "Integrasi Rest & Client",
    subtitle: [
      "/image/icon/ci.png",
      "/image/icon/tailwind.png",
      "/image/icon/js.png",
    ],
    img: "/image/integrasi.png",
    description: "Integrasi Rest & Client.",
    category: "Website",
    github: "https://drive.google.com/drive/folders/1f57YDQZdaEjJ6wJ17ZPfbCnzcRmiCkg9?usp=sharing",
    live: "https://www.anggawahyudi.my.id/",
  },


  //system analys
  {
    title: "Analisis Perancangan Sistem Informasi",
    category: "Design Perancangan Sistem",
    subtitle: ["/image/icon/drawio.png"],
    img: "/image/gambar1.png", 
    file: "/files/analisis.pdf",
    description: "Dokumen analisis sistem informasi dalam format PDF.",
  },
  {
    title: "Flowchart Sistem",
    category: "Design Perancangan Sistem",
    subtitle: [
      "/image/icon/drawio.png",
    ],
    img: "/image/flowchart-1.jpg",
    description:
      "",
  },
  {
    title: "Flowchart Sistem",
    category: "Design Perancangan Sistem",
    subtitle: [
      "/image/icon/drawio.png",
    ],
    img: "/image/flowchart-2.jpeg",
    description:
      "",
  },
  {
    title: "Diagram Arsitektur Sistem",
    category: "Design Perancangan Sistem",
    subtitle: ["/image/icon/drawio.png"],
    img: "/image/arsiteksistem.jpg", 
    description: "Dokumen analisis sistem informasi dalam format PDF.",
  },
  {
    title: "Usecase Diagram Website LaporPak",
    category: "Design Perancangan Sistem",
    img: "/image/usecase-2.jpg", 
    description: "Dokumen analisis sistem informasi dalam format PDF.",
  },
  {
    title: "Usecase Diagram Sistem Pemesanan Makanan",
    category: "Design Perancangan Sistem",
    img: "/image/usecase-1.jpg", 
    description: "Dokumen analisis sistem informasi dalam format PDF.",
  },

  {
    title: "UI/UX Aplikasi LaporPak",
    category: "UI/UX",
    subtitle: [
      "/image/icon/figma.png",
    ],
    img: "/image/uiux-2.png",
    description:
      "Perancangan UI/UX untuk aplikasi pelaporan masyarakat LaporPak. Desain dibuat menggunakan Figma dengan fokus pada kemudahan penggunaan, navigasi intuitif, dan tampilan yang informatif.",
    live: "https://www.figma.com/design/0Q08kZt093Orja9Ij8fa4F/Untitled?node-id=0-1&t=2CiG8xlJoZGALHnx-1",
  },
  {
    title: "UI/UX Aplikasi E-Montir",
    category: "UI/UX",
    subtitle: [
      "/image/icon/figma.png",
    ],
    img: "/image/uiux-1.png",
    description:
      "Perancangan UI/UX untuk aplikasi E-Montir, platform layanan montir dan servis kendaraan secara online. Dibuat dengan Figma, desain fokus pada kemudahan pemesanan, pelacakan layanan, dan tampilan modern yang responsif.",
    live: "https://www.figma.com/design/mu66urwIpLDSNQESCp1Knl/Untitled?t=2CiG8xlJoZGALHnx-1",
  }

];

export const certificateList = [
  {
    title: "SIB",
    img: "/certificates/image.png",
    file: "/certificates/stupen.pdf",
  },
  {
    title: "Project Case",
    img: "/certificates/project-case.png",
    file: "/certificates/project-case.png",
  },
  {
    title: "Hackathon 2",
    img: "/certificates/hackaton.jpeg",
    file: "/certificates/hackaton.jpeg",
  },
  {
    title: "Completed SIB",
    img: "/certificates/image1.png",
    file: "/certificates/stupen2.pdf",
  },
  {
    title: "PKL",
    img: "/certificates/pkl.png",
    file: "/certificates/pkl.pdf",
  },
  {
    title: "Dicoding",
    img: "/certificates/dicoding-1.png",
    file: "/certificates/dicoding-1.pdf",
  },
  {
    title: "Dicoding",
    img: "/certificates/dicoding-2.png",
    file: "/certificates/dicoding-2.pdf",
  },
  {
    title: "Dicoding",
    img: "/certificates/dicoding-3.png",
    file: "/certificates/dicoding-3.pdf",
  },
  {
    title: "Dicoding",
    img: "/certificates/dicoding-4.png",
    file: "/certificates/dicoding-4.pdf",
  },
  {
    title: "Dicoding",
    img: "/certificates/dicoding-5.png",
    file: "/certificates/dicoding-5.pdf",
  },
  {
    title: "Dicoding",
    img: "/certificates/dicoding-6.png",
    file: "/certificates/dicoding-6.pdf",
  },
  {
    title: "Dicoding",
    img: "/certificates/dicoding-7.png",
    file: "/certificates/dicoding-7.pdf",
  },
];




export const contactCardList = [
  {
    ContactIcon: BsFillTelephoneFill,
    title: "Telephone",
    contact: "+6285806042201",
    href: "tel:+6285806042201",
  },
  {
    ContactIcon: MdEmail,
    title: "Email",
    contact: "anggadwiwhy67@gmail.com",
    href: "https://www.google.com/intl/id/gmail/about/",
  },
  {
    ContactIcon: FaWhatsapp,
    title: "Whatsapp",
    contact: "+6285806042201",
    href: "https://wa.me/6285806042201",
  },
];
