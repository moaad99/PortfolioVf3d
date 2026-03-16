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
  git,
  figma,
  docker,
  cegid,
  berexia,
  cogitas,
  next,
  angular,
  carrent,
  luxe,
  jobit,
  tripguide,
  tradex,
  neural
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

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/moaad99",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/moaad-msellek-b4a602194/",
    icon: "linkedin",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Optimization Specialist",
    icon: backend,
  },
  {
    title: "API Integration Specialist",
    icon: creator,
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
    name: "Angular",
    icon: angular,
  },
  {
    name: "Next JS",
    icon: next,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-end Engineer ReactJs/Angular",
    company_name: "Cegid",
    icon: cegid,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Resolved critical production bugs, enhancing overall application stability and reducing service interruptions.",
      "Managed application state using NgRx , RxJs and Redux, increasing the efficiency of state management.",
      "Participated in code reviews and pair programming, promoting knowledge sharing and continuous team improvement.",
    ],
  },
  {
    title: "Front-end Engineer ReactJs/Angular",
    company_name: "Berexia",
    icon: berexia,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Jan 2023",
    points: [
      "Developed and maintained a customer insurance management system for SCOR France, enabling seamless addition, modification, and deletion of insurance policies, streamlining policy management.",
      "Developed an innovative ESG data management platform that improved user experience and facilitated transparent communication of ESG efforts to stakeholders.",
      "Implemented a time tracking and validation system for the FRED Web project, reducing scheduling errors and improving personnel and resource management for FAYAT client.",
      "Collaborated with back-end developers to create and consume REST APIs, reducing integration issues and improving development workflow.",
    ],
  },
  {
    title: "Software engineer intern",
    company_name: "Cogitas Solutions",
    icon: cogitas,
    iconBg: "#383E56",
    date: "Jully 2018 - Sep 2018",
    points: [
      "Design and implementation of a Stock Management application.",
      "System developed with rigorous controls for scalability and security.",
      "Web application state management with Redux.",
      "Technologies : ReactJs, Redux.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "LUXE PARFUMS",
    description:
      "Discover our curated collection of the world's finest luxury perfumes. Each scent tells a story of elegance, passion, and timeless sophistication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: luxe,
    source_code_link: "https://github.com/moaad99/LUXE-PARF",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next Js",
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
    source_code_link: "https://github.com/moaad99/job-it",
  },
   {
    name: "TRADE X",
    description:
      "TRADE X is a modern fintech dashboard built with React and Next.js that simulates a professional trading terminal. It features real-time market data simulation, interactive charts, a customizable watchlist, and a trading order panel.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
       {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tradex,
    source_code_link: "https://github.com/moaad99/TradeX",
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
    source_code_link: "https://github.com/moaad99/AI-Trip-guide",
  },
  {
    name: "NeuralArc",
    description:
      "NeuralArc is a modern web application built with React and Next.js that simulates a real-world AI software platform. It features a ChatGPT-style interface, analytics dashboards, prompt management, and team workspace tools.",
    tags: [
      {
        name: "nextJs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: neural,
    source_code_link: "https://github.com/moaad99/AI-SaaS-Dashboard",
  },
  {
    name: "Estate Burger Kitchen",
    description:
      "The landing page provides an immediate, visual introduction to the restaurant's best and most appealing burgers.Its primary goal is to minimize steps and encourage the user to take the next action, such as viewing the menu.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/moaad99/Estate-burger-kitchenVf",
  },
];

export { services, technologies, experiences, testimonials, projects };
