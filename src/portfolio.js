/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Zian Asti Dwiyanti",
  description:
    "Seorang individu yang bersemangat dan selalu berkembang untuk mengerjakan sesuatu. Dari mulai awal hingga akhir tetap berjuang untuk mencapai tujuan walaupun hal tersebut sulit.",
  og: {
    title: "Portofolio Zian Asti Dwiyanti",
    type: "website",
    url: "http://zianasti.com/",
  },
};

//Home Page
const greeting = {
  title: "Zian Asti Dwiyanti",
  logo_name: "Zian Asti Dwiyanti",
  nickname: "Dezi",
  subTitle:
    "Seorang individu yang bersemangat dan selalu berkembang untuk mengerjakan sesuatu. Dari mulai awal hingga akhir tetap berjuang untuk mencapai tujuan walaupun hal tersebut sulit.",
  resumeLink:
    "https://drive.google.com/file/d/1oP3F8HPMjC7x_CsJvRc4B-AKte4c0xQP/view",
  whatsapp: "https://wa.me/6281224122760",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Zianasti",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Line",
    link: "https://line.me/ti/p/S66wGGxY-h",
    fontAwesomeIcon: "fab fa-line", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#00C300", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCl_A4T1EK4jp_FhdYskmbNQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ziandwiasti23@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/AstiZian?s=08",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/zian.astyidwiyanti",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/zianasti_/?r=nametag",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Language",
      fileName: "DataScienceImg",
      skills: ["⚡ Bahasa Indonesia", "⚡ Bahasa Inggris", "⚡ Bahasa Jepang"],
      softwareSkills: [],
    },

    {
      title: "Motto",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Don’t be afraid ! If it doesn’t open, it’s not your door ! ⚡",
      ],
      softwareSkills: [],
    },
    {
      title: "Skill",
      fileName: "DesignImg",
      skills: [
        "⚡ Adobe Photoshop",
        "⚡ Microsoft Word",
        "⚡ Microsoft Power Point",
        "⚡ Microsoft Excel",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "simple-icons:microsoftword",
          style: {
            color: "#2B579A",
          },
        },
        {
          skillName: "Microsoft Power Point",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: {
            color: "#B7472A",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Politeknik Pos Indonesia",
      subtitle: "D4 Teknik Informatika",
      logo_path: "logo_poltekpos.png",
      alt_name: "Poltekpos Indonesia",
      duration: "2020 - Present",
      descriptions: [" "],
      website_link: "https://poltekpos.ac.id/",
    },
    {
      title: "SMAN 7 GARUT",
      subtitle: "IPA",
      logo_path: "sman7.png",
      alt_name: "Smantuga",
      duration: "2017 - 2020",
      descriptions: [" "],
      website_link: "https://sman7garut.sch.id/",
    },
    {
      title: "SMPN 1 CARINGIN",
      subtitle: " ",
      logo_path: "logosmp.png",
      alt_name: "Nescar",
      duration: "2014 - 2017",
      descriptions: [" "],
      website_link:
        "https://sekolah.data.kemdikbud.go.id/index.php/chome/profil/d0863b14-2cf5-e011-bd4b-7b56d006f34d/",
    },
    {
      title: "SDN 1 SUKARAME",
      subtitle: " ",
      logo_path: "logo_sd.png",
      alt_name: "sdn1sukarame",
      duration: "2008 - 2014",
      descriptions: [" "],
      website_link: "https://hayusakola.com/view/sdn-1-sukarame-2",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Academy",
      subtitle: "-Java Programming",
      logo_path: "logo_oracle1.png",
      certificate_link:
        "https://drive.google.com/file/d/1XjKNvg_Ruo-3EYMp-PFHPdmrNc3VW2oT/view?usp=sharing",
      alt_name: "Oracle Academy",
      color_code: "#8C151599",
    },
    {
      title: "Kominfo",
      subtitle: "-Pandu Digital",
      logo_path: "logo_kominfo.png",
      certificate_link:
        "https://drive.google.com/file/d/1tpxa0DWp4tao6XZm0gewIUo5RpY6pvkv/view?usp=sharing",
      alt_name: "Kominfo",
      color_code: "#FFBB0099",
    },
    {
      title: "Oracle Academy",
      subtitle: "-Database Design",
      logo_path: "logo_oracle1.png",
      certificate_link:
        "https://drive.google.com/file/d/1IOePrf41oTTZmhy9hQKFQWxdJIe95P_b/view?usp=sharing",
      alt_name: "Oracle Academy",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "zianad.png",
    description:
      "Saya tersedia di hampir setiap media sosial. Anda dapat mengirim pesan kepada saya, saya akan membalas dalam waktu 24 jam. Semoga saya dapat membantu anda.",
  },
  blogSection: {
    title: "Instagram",
    subtitle:
      "Biasanya saya suka menulis beberapa informasi mengenai diri saya di instagram.",
    link: "https://www.instagram.com/zianasti_/?r=nametag",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Kp. Pasir Kolecer RT.01 RW.05 Desa Sukarame Kecamatan Caringin Kabupaten Garut Provinsi Jawa Barat, Indonesia ",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/xMub8tPbyvnb6Ck68",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+6281224122760",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
