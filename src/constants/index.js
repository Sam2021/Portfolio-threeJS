import {
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  study,
  aalborg,
  TCS,
  front,
  covid,
  disney,
  airbnb,
  voice,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills"
  },
  {
    id: "edu",
    title: "Education and Experince",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "ach",
    title: "Achievement",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: front,
  },
  {
    title: "React  Developer",
    icon: reactjs,
  },
  {
    title: "QA Tester | Manual tester",
    icon: backend,
  },
  
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "B.Tech in Computer Science and Engeering(Network and Security)",
    company_name: "MIT-ADT Univeristy, Pune",
    icon: study,
    iconBg: "#383E56",
    date: "July 2017 - June 2021",
    points: [
      "Graduated with 7.02 CGPA in 2021.",
      "Participated in the hackathon as a volunteer and participant.",
      "Worked on project based on Web development, Hand gesture and also published mupltiple research and surevy paper",
    ],
  },
  {
    title: "Student intern",
    company_name: "Aalborg University, Denmark",
    icon: aalborg,
    iconBg: "#383E56",
    date: "May 2019 - June 2019",
    points: [
      "International Internship on new areas of ICT including Privacy and Security, Interaction Design, Cloud Computing, Market- analysis, Electronics, and Business Models including successful development and delivery of a mini-project and exercise on the Internet of Things (IoT)",
      
    ],
  },
  {
    title: "Assistant System Enginee ",
    company_name: "Tata Consultancy Services Limited",
    icon: TCS,
    iconBg: "#383E56",
    date: "Dec 2021 - present",
    points: [
      "Actively participated in all QA and testing activities during QA and PROD SDLC.",
      "Executed testing on the website, logged defects, and worked to resolve issues noted in the testing process.",
      "Worked extended hours when necessary to meet deadlines.",
      "Pursued professional development opportunities to learn new testing tools and test strategies.",
      "Prepared Test Reports and submitted the bug findings to the Jira defect tracking system.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Publish Research paper based on face authentication using video-based method in June 2022",
    name: "Dynamic Based face authentication using Video-Based Method",
    designation: "International Research Journal of Engineering and Technology(IRJET)",
    
  },
  {
    testimonial:
      "Publish Research paper based hand gesture recognition to control desktop in June 2021",
    name: "Control Desktop Applications with a Simple Webcam and Gesture Recognition using DL",
    designation: "International Journal of Innovative Science and Research Technology",
   
    
  },
  {
    testimonial:
      "Publish Survey paper based on human computer interaction in Jan 2021",
    name: "Human-Computer Interaction Using Dynamic Hand Gesture Recognition To Conveniently Control The System",
    designation: "International Journal of Engineering Applied Sciences and Technology",
    
    
  },
  {
    testimonial:
      "Publish Survey paper based on prevention of cyber attack using ML and DL in May 2020",
    name: "A Survey on Security System using Machine Learning and Deep Learning",
    designation: "International Journal of Innovative Science and Research Technology",
    
    
  },
];

const projects = [
 
  {
    name: "Airbnb Clone",
    description:
      "Web application of aribnb clone(frontend only) where user can check different room search according to dates and number of guests with dummy data. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/",
  },
  {
    name: "Disney+ Clone",
    description:
      "A Disney + clone where user can login using google authentication and check the page and experince the feel of website where there is some default video playing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: disney,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voice Control News",
    description:
      "A website created using Alan AI in which a user can control the website and checkout news using voice command and also can command to auto read headlines of news. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Alan AI",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: voice,
    source_code_link: "https://github.com/",
  },
  {
    name: "Covid-19 tracker",
    description:
      "Web-based platform that allows users to check update on total covid cases, recovered cases and Death cases from all over world with interative map. Other than that user can also select specific country and check ranking of country with respect to cases",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      
    ],
    image: covid,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
