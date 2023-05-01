import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  powerbi,
  sql,
  git,
  figma,
  docker,
  meta,
  sg,
  tesla,
  asydorenko_ph,
  ingo,
  unbr,
  shopify,
  carrent,
  myphoto_1,
  myphoto_2,
  agrishan_ph,
  fastmoney,
  jobit,
  tripguide,
  leonid_hp,
  sprocenko_ph,
  vshkvira_ph,
  apostn_ph,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Power Bi Developer",
    icon: mobile,
  },
];

const myphoto = [
  {
    title: "Me and my teem, work atmosfere",
    image: myphoto_1,
  },
  {
    title: "My 2021 awords",
    image: myphoto_2,
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
  /*{
    name: "MongoDB",
    icon: mongodb,
  },*/
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Head of ERP Development",
    company_name: "Fintech company",
    icon: sg,
    iconBg: "#383E56",
    date: "Sep 2021 – Jan 2023",
    points: [
      "Effectively communicated with business leaders, stakeholders, and developers for the company’s key projects, including understanding and negotiating customers’ requirements and providing regular updates on progress. ",
      "Transformed customer requirements into tailor-made solutions.",
      "Advised customers on the budget and resources needed and possible solutions to their problems.",
      "Led a team of 4 internal programmers as well as outsourcing teams; interviewed, hired, and trained new staff.",
      "Developed architecture and set tasks for programmers",
      "Awarded Employee of the Year in 2021.",
    ],
  },
  {
    title: "Power BI Software Developer",
    company_name: "Fintech company",
    icon: sg,
    iconBg: "#383E56",
    date: "Jun 2019 – Sep 2021",
    points: [
      "Built and maintained Power BI. ",
      "Building complex data models. ",
      "Writing complex reports in Power Bi for the CEO and top managers of the company",
      "Finding errors in the data",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Writing complex SQL queries",
    ],
  },
  {
    title: "Software Developer/Data analyst",
    company_name: "UNBR,Alser,Orlando",
    icon: unbr,
    iconBg: "#E6DEDD",
    date: "Mar 2015 – May 2019",
    points: [
      "Collected customer requirements and consulted on customers’ projects. ",
      "Worked with companies with various scales, including SNBR, Alser, Orlando, etc. ",
      "Translated customer needs to tailor-made, achievable solutions, including digitalization and paperless projects, creating report for sales and accounting. ",
      "Created scripts for Power Bi",
      "Awarded and recognized by companies for contributing to their development.",
    ],
  },
  {
    title: "Software Developer/Data analyst",
    company_name: "Ingo",
    icon: ingo,
    iconBg: "#383E56",
    date: "Jun 2009 – Aug 2011",
    points: [
      "Built and maintained Power BI.",
      "Exchanged and troubleshot XML documents.",
      "Worked with large databases and trained users.",
      "Integrated SQL reports with ERP.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Worked with Bogdan in the direction of integrating SQL with other systems for more than 2 years. We built a SQL telephony system from scratch, which brought great benefits to the company. Bogdan proved to be a professional developer with a good knowledge of SQL, able to solve any problem.",
    name: "Alexandr Grishan",
    designation: "Head of SQL Developer",
    company: "Fintech company",
    image: agrishan_ph,
  },
  {
    testimonial:
      "Together we developed SQL integration with various systems. He is able to solve different technical tasks and create good architecture solutions. Working with him was very easy, he is a great team member.",
    name: "Alexandr Sydorenko",
    designation: "Head of Retail Risk Division at Unex Bank",
    company: "Fintech company",
    image: asydorenko_ph,
  },
  {
    testimonial:
      "I was impressed by Bogdan's technical abilities and how he used systems thinking to create effective, complex solutions to technical problems that radically simplified the work of the entire company. ",
    name: "Anna Postnykova",
    designation: "Lead QA Engineer",
    company: "Fintech company",
    image: apostn_ph,
  },
  {
    testimonial:
      "Bogdan demonstrating expertise in React development and related technologies such as JavaScript, HTML, CSS, and SQL. He was a strong collaborator and consistently delivered high-quality work. Bogdan also a valuable team player, being friendly, polite, and always striving to maintain a positive work environment.",
    name: "Vladimir Shkvira",
    designation: "Software Developer",
    company: "Fintech company",
    image: vshkvira_ph,
  },

  {
    testimonial:
      "I was lucky to worked with Bogdan as a task manager from business. Bogdan knows how to deeply understand the very essence of the task and offer a comprehensive system solution that is easy and simple to maintain. Bogdan also knows how to ask such questions that will help to more accurately correct the problem statement.",
    name: "Sergey Procenko",
    designation: "Head of the analytics department",
    company: "Fintech company",
    image: sprocenko_ph,
  },
  {
    testimonial:
      "we worked together for 4 years!  I want to note your ability to conduct a positive dialogue with programmers! Despite the mood with which I started the conversation, I ended the conversation with a positive attitude and this made working with you very pleasant and comfortable.",
    name: "Leonid Yarmolnyk",
    designation: "Software Developer",
    company: "Fintech company",
    image: leonid_hp,
  },
];

const projects = [
  {
    name: "Fast money",
    description:
      "An online platform for quick and convenient obtaining of microloans, providing a user interface for comparing lending conditions, choosing the optimal loan and managing it in real time, ensuring transparency and efficiency of financial services.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Power BI",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fastmoney,
    source_code_link: "https://github.com/",
  },
  {
    name: "Power BI blog",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { myphoto, services, technologies, experiences, testimonials, projects };
/*{
    testimonial:
      "we worked together for 4 years!  I want to note your ability to conduct a positive dialogue with programmers! Despite the mood with which I started the conversation, I ended the conversation with a positive attitude and this made working with you very pleasant and comfortable.",
    name: "Leonid Yarmolnyk",
    designation: "Software Developer",
    company: "Fintech company",
    image: "./src/assets/coworker/leonid.jpg",
  },*/
