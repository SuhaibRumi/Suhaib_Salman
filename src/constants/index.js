import {
  javascript, html, css, reactjs, tailwind, nodejs, mongodb, git, threejs,
  hf, bny, holopin,
  clg, school,
  crypto, oop, yml, crud, dwld, onetomany,
  trie, ds, cg,
  port_3d, jsp, chitchat, notes, react1,
  be, sql, mini, snl,
} from "../assets";
import sahiwal from '../assets/sahiwal.jpeg'
import lahore from '../assets/lahore.png'
import appsol from '../assets/apsol.png'
import aptagon from '../assets/aptagon_logo.jpeg'
import invextech from '../assets/invextech.png'
import upwork from '../assets/upwork.png'
import postman from '../assets/postman.png'
import bloc from '../assets/idk.webp'
import rest from '../assets/rest-api.png'
import dart from '../assets/dart.png'
import flutter from '../assets/flutter.png'
import firebase from '../assets/firebase.png'
import getx from '../assets/sql.png'
// import sqll from '../assets/sql.png'
import prjt1 from '../assets/project1.png'
import prjt2 from '../assets/project2.png'
import prjt3 from '../assets/project3.png'
import prjt4 from '../assets/project4.jpg'
import prjt5 from '../assets/project5.jpeg'
import prjt6 from '../assets/project6.jpg'

const profiles = [
  {
    link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
  },
  {
    link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
  },
  {
    link: "https://www.hackerrank.com/_shinchancode",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    link: "https://dev.to/shinchancode",
    icon: hf,
  },
  {
    link: "https://www.holopin.io/@shinchancode#badges",
    icon: holopin,
  },
];

const achievements = [
  {
    title: "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
  },
  {
    title: "Twice State level Table-Tennis Winner (2021 and 2022)",
  },
  {
    title: "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
  },
  {
    title: "Branch Head of Information Technology Department (2021 - 2022)",
  },
  {
    title: "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
  },
  {
    title: "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
  },
  {
    title: "Played Nationals in Throwball for U-14 category. (2015)",
  },
]

const technologies = [
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "base",
    icon: firebase,
  },
  {
    name: "oc",
    icon: bloc,
  },
  {
    name: "git",
    icon: rest,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "postman",
    icon: postman,
  },
  {
    name: "MySql",
    icon: getx,
  },


  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
  },

  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },


];

const list = [
  {
    id: "java",
    title: "Flutter",
  },
  {
    id: "c++",
    title: "Dart"
  },
  {
    id: "web",
    title: "FireBase",
  },
  {
    id: "other",
    title: "Other",
  },
];

export const javaProject = [
  {
    name: "UpAlerts",
    description:
      "UpAlerts is the ultimate productivity tool for freelancers, helping to streamline the job application process With its user-friendly design and functionality, UpAlerts is the perfect solution for freelancers looking to save time and effort while applying for new jobs on the platform",
    tags: [
      {
        name: "UpAlerts",
        color: "blue-text-gradient",
      },
      {
        name: "Freelancing",
        color: "green-text-gradient",
      },
      {
        name: "TimeSaving",
        color: "pink-text-gradient",
      },
    ],
    image: prjt1,
    source_link: "https://play.google.com/store/apps/details?id=com.upalerts.app&hl=en&gl=US",
    source_code_link: "https://play.google.com/store/apps/details?id=com.upalerts.app&hl=en&gl=US",
  },
  {
    name: "Stream Up",
    description:
      "In this project, I designed the UI, integrated APIs, and implemented Agora for video calling and streaming. I also resolved various bugs. Stream Up is a social live-streaming app that lets users make friends, video call, and share memorable moments.",
    tags: [
      {
        name: "StreamUp",
        color: "blue-text-gradient",
      },
      {
        name: "Streaming",
        color: "green-text-gradient",
      },
      {
        name: "friends",
        color: "pink-text-gradient",
      },
    ],
    image: prjt3,
    source_link: "https://github.com/SuhaibRumi",
    source_code_link: "https://github.com/SuhaibRumi",
  },
  {
    name: "COVID Tracking",
    description:
      "In this project, I built a system for tracking global health statistics, including total cases, recoveries, and deaths, along with a country-specific list. The system offers real-time updates and a user-friendly interface for easy data access and visualization.",
    tags: [
      {
        name: "Covid",
        color: "blue-text-gradient",
      },
      {
        name: "deaths",
        color: "green-text-gradient",
      },
      {
        name: "globalStatistics",
        color: "pink-text-gradient",
      },
    ],
    image: prjt2,
    source_link: "https://github.com/SuhaibRumi/Covid-19-Tracking-App",
    source_code_link: "https://github.com/SuhaibRumi/Covid-19-Tracking-App",
  },
  {
    name: "Olizon",
    description:
      "Our e-commerce app offers a seamless, enjoyable shopping experience with a user-friendly interface and a diverse product range. Designed for convenience, it makes online shopping easy, fun, and hassle-free.",
    tags: [
      {
        name: "Olizon",
        color: "blue-text-gradient",
      },
      {
        name: "e-commerence",
        color: "green-text-gradient",
      },
      {
        name: "shopping",
        color: "pink-text-gradient",
      },
    ],
    image: prjt4,
    source_link: "https://github.com/SuhaibRumi",
    source_code_link: "https://github.com/SuhaibRumi",
  },
  {
    name: "University Management System",
    description:
      "The University Management System (UMS) app streamlines operations, enhances student experiences, and improves communication across the university, efficiently managing everything from academics to extracurricular activities.",
    tags: [
      {
        name: "study",
        color: "blue-text-gradient",
      },
      {
        name: "managing",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: prjt5,
    source_link: "https://github.com/SuhaibRumi/Ums_firebase",
    source_code_link: "https://github.com/SuhaibRumi/Ums_firebase",
  },
  {
    name: "E-Shop",
    description:
      "Discover a diverse marketplace with our E-Shop app, offering everything from clothing to groceries. Enjoy a seamless, user-friendly experience with easy browsing, secure payments, and fast delivery—your go-to app for all shopping needs",
    tags: [
      {
        name: "shoping",
        color: "blue-text-gradient",
      },
      {
        name: "furniture",
        color: "green-text-gradient",
      },
      {
        name: "clothes",
        color: "pink-text-gradient",
      },
    ],
    image: prjt6,
    source_link: "https://github.com/SuhaibRumi",
    source_code_link: "https://github.com/SuhaibRumi",
  },
];

export const cProject = [
  {
    name: "Spell Checker",
    description:
      "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "trie",
        color: "green-text-gradient",
      },
      {
        name: "dictionary",
        color: "pink-text-gradient",
      },
    ],
    image: trie,
    source_link: "https://github.com/shinchancode/Trie-Data-structure",
    source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
  },
  {
    name: "DSA Lab",
    description:
      "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
    tags: [
      {
        name: "DSA",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: ds,
    source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
    source_code_link: "https://github.com/shinchancode/Data-Structure-Algorithms/",
  },
  {
    name: "Computer Graphics Lab",
    description:
      "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
    tags: [
      {
        name: "computergraphics",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: cg,
    source_link: "https://github.com/shinchancode/Computer-Graphics",
    source_code_link: "https://github.com/shinchancode/Computer-Graphics",
  },

];

export const webProject = [
  {
    name: "3D React Portfolio",
    description:
      "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "3d_react",
        color: "pink-text-gradient",
      },
    ],
    image: port_3d,
    source_link: "https://shinchancode.github.io/3d-react-portfolio/",
    source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
  },
  {
    name: "React portfolio",
    description:
      "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "html css",
        color: "pink-text-gradient",
      },
    ],
    image: react1,
    source_link: "https://shinchancode.github.io/React-Portfolio/",
    source_code_link: "https://github.com/shinchancode/React-Portfolio",
  },
  {
    name: "30 Days of JavaScript",
    description:
      "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "30dayschallenge",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jsp,
    source_link: "https://rathi-30-days-of-javascript.onrender.com/",
    source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
  },
  {
    name: "Chit Chat Application",
    description:
      "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
    tags: [
      {
        name: "Chatting",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: chitchat,
    source_link: "https://chit-chat-app.onrender.com/",
    source_code_link: "https://github.com/shinchancode/Chit-Chat-Real_time_chat_app",
  },
  {
    name: "Notes Application",
    description:
      "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
    tags: [
      {
        name: "notes",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: notes,
    source_link: "https://shinchancode.github.io/Notes-App/",
    source_code_link: "https://github.com/shinchancode/Notes-App",
  },
];

export const otherProject = [
  {
    name: "Multilingual Multiple Choice Question Generation",
    description:
      "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "multilingual",
        color: "green-text-gradient",
      },
      {
        name: "BE_Project",
        color: "pink-text-gradient",
      },
    ],
    image: be,
    source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
    source_code_link: "https://github.com/shinchancode/Final-Year-Project",
  },

  {
    name: "DBMS Lab",
    description:
      "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: sql,
    source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
  },
  {
    name: "SQL : Library Management System",
    description:
      "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "miniproject",
        color: "pink-text-gradient",
      },
    ],
    image: mini,
    source_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    source_code_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
  },
  {
    name: "Pyhton : Snake and Ladder",
    description:
      "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
    tags: [
      {
        name: "snake and ladder",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: snl,
    source_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    source_code_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
  },

];

const experiences = [
  {
    title: "Flutter Devloper",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    link: "",
    points: [
      "Developed and launched cross-platform mobile apps using Flutter for iOS and Android.",
      "Integrated RESTful APIs and Firebase for real-time functionality and data sync.",
      "Implemented Agile, CI/CD, and TDD to ensure high-quality, efficient development.",
      "Proficient in Dart, Flutter SDK, and state management with Provider and Bloc.",
    ],
    link: "https://www.upwork.com/freelancers/~01bdf3e81aec00bff1",
  },
  {
    title: "Flutter Devloper",
    company_name: "Appsol 360 • Okara (Remote)",
    icon: appsol,
    iconBg: "#383E56",
    date: "Sep 2023 - July 2024",
    link: "",
    points: [
      "Customized UI/UX designs for seamless user experience across various devices.",
      "Optimized app performance, reducing load times and enhancing responsiveness.",
      "Implemented in-app purchase features and push notifications using Flutter plugins.",
    ],
    link: "https://github.com/SuhaibRumi",
  },
  {
    title: "Junior Flutter Developer",
    company_name: " Aptagon Technologies • Okara, Pakistan",
    icon: aptagon,
    iconBg: "#E6DEDD",
    date: "June 2021 - July 2023",
    link: "",
    points: [
      "Collaborated with designers and backend developers to create cohesive app experiences.",
      "Migrated legacy apps to Flutter, enhancing performance and maintainability.",
      "Used Git for version control and collaborated with teams via GitHub and GitLab.",
    ],
    link: "https://github.com/SuhaibRumi",
  },
  {
    title: "Intern Flutter Developer",
    company_name: "TechLeads • Okara, Pakistan",
    icon: invextech,
    iconBg: "#383E56",
    date: "Feb 2021 - Apr 2021",
    link: "",
    points: [
      "Published apps on the App Store and Google Play, ensuring compliance with platform standards.",
      "Integrated third-party libraries and plugins to extend app functionality.",
      "Wrote unit and integration tests to ensure code reliability and prevent regressions.",
    ],
    link: "https://github.com/SuhaibRumi",
  },
];

const educations = [
  {
    degree:
      "Web Designing (UI/UX) and Web Development",
    branch: "Development",
    marks:
      "Cerificate",
    name: "National Vocational and Technical Training Commission",
    year: "(2022)",
    image: lahore,
  },
  {
    degree: "Bachelor's of Computer Science",
    branch:
      "Bachelor of Science",
    marks:
      "CGPA : 3.42 / 4",
    name: "UNIVERSITY OF THE PUNJAB ",
    year: "(2015 - 2019)",
    image: clg,
  },
  {
    degree:
      "12th Grade",
    branch: "Science",
    marks:
      "Percentage : 89.88 %",
    name: "Bise Sahiwal",
    year: "(2012 - 2014)",
    image: sahiwal,
  },

];

export { list, profiles, technologies, experiences, educations, achievements };
