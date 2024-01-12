export const textContent = {
  heroSubText: "I take your ideas and turn them into beautiful web based applications, the rest of the world can enjoy...",
  overview: (
    <p>
      Hi, I'm <span className="text-white">Marc</span>, a North-West UK based,{" "}
      <span className="text-white">Web designer</span> and{" "}
      <span className="text-white">Software Engineer</span> focussed on creating
      clean and user-friendly experiences. <br />
      <br />I am passionate about building excellent software that enhances the
      lives of those around me, working with people to help them make their
      dreams a reality.
    </p>
  ),
  projectDescription: 'Much of my career has been within the Public Sector and so evidence of my contributions to those organisations cannot be demonstrated for public viewing due to the nature of work completed. The following projects showcase my skills and experience through real-world examples of my work.'
};

import {
  softwareengineer,
  stakeholderengagement,
  teamleader,
  projectmanager,
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
  nhs,
  morses,
  phoenix,
  mycsp,
  threejs,
  disney,
  dotdotloans,
  morsesImg,
  fask,
  heypharmacist,
  swgcalc,
  swgutils,
  uaccount,
  java
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
    title: "Software Engineer",
    icon: softwareengineer,
  },
  {
    title: "Team Leader",
    icon: teamleader,
  },
  {
    title: "Project Manager",
    icon: projectmanager,
  },
  {
    title: "Stakeholder Engagement",
    icon: stakeholderengagement,
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
    name: "Java",
    icon: java,
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
  }
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Phoenix Medical Supplies",
    icon: phoenix,
    iconBg: "#383E56",
    date: "Oct 2022",
    points: [
      "Development of RESTful API's to support developers across the full stack",
      "Onboarding and support for developers working across multiple products and functions",
      "Develop reports dashboard for pharmacies to view their customers current and historic ordering",
      "Streamlined continuous integration pipelines adding audit and validation",
      "Mentored others in the team as the department transitions towards a Full-stack environment",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "Morses Club",
    icon: morses,
    iconBg: "#E6DEDD",
    date: "Oct 2021",
    points: [
      "Transitioned legacy PHP front end code into React",
      "Streamlined front end production deployment through webpack bundling and gulp task automation",
      "Redeveloped user dashboard to comply with financial banking legislation",
      <p>Creation and maintenance of Morses externally facing websites inc <a target="_blank" rel="noreferrer" href="https://www.uaccount.uk/">UAccount</a>, <a target="_blank" rel="noreferrer" href="https://www.dotdotloans.co.uk/">DotDotLoans</a> and <a target="_blank" rel="noreferrer" href="https://www.morsesclub.com/">Morses Club</a></p>,
      "Created automated solution for customers to handle their finances, reducing Operations overhead and improving customer service",
    ],
  },
  {
    title: "Informatics Leadership Team",
    company_name: "Manchester University NHS Foundation Trust (MFT)",
    icon: nhs,
    iconBg: "#383E56",
    date: "Apr 2020",
    points: [
      "Leadership responsibility for 12 developers",
      "Designed and created a React CRUD application for scheduling statutory and regular activities (52k per year) integrating KPI and SLA management and incident reporting",
      "Transformed COVID19 reporting process from completely manual to automated solution, decreasing the resource requirement by 50%",
    ],
  },
  {
    title: "Head of Function",
    company_name: "MyCSP",
    icon: mycsp,
    iconBg: "#E6DEDD",
    date: "May 2019",
    points: [
      "Leader for multi-functional teams including Pension Administration, Continuous Improvement and Development teams totalling 120+ team members",
      "Created self service suite of reporting function using React and data visualization libraries",
      "Achieved 99% delivery of annual statement production, increase of 4% on previous year",
      "Project manager for Pension rectification of over 300,000 pensioners",
    ],
  },
  {
    title: "Project Manager (Operational)",
    company_name: "MyCSP",
    icon: mycsp,
    iconBg: "#E6DEDD",
    date: "Aug 2017",
    points: [
      "Project Manager for Pension Annual Events and leadership for team of developers",
      "Developed internal SLA management process for development team and introduced agile methodologies",
      "Created a Pension calculations system using React front-end and vanilla javascript back-end, taking input from users to perform complex calculations, meeting compliance regulations",
      "Implemented career development programmes to enhance staff skills",
    ],
  },
  {
    title: "Workforce Planning Manager",
    company_name: "NHS Business Services Authority",
    icon: nhs,
    iconBg: "#E6DEDD",
    date: "Nov 2008",
    points: [
      "Leader for a group of developers, delivering Service Management software across multiple departments (300+ team members), including performance tracking software, time management software and capacity and planning software for management",
      "Tools used were most React, with some simpler tools created using vanilla HTML/CSS & Javascript",
      "Accountable for capacity management and planning intra-day activities across large teams of Pension Administrators",
      "Responsible for metric reporting across the Pensions department, acting as the contact point between NHS Pensions and the Department of Health",
      "Absorbed Team Leadership responsibilities for a Pension Administration team (20 staff) for Quotation production. Within 3 months, improved turnaround times from 90 days to 3 days, implemented development plans to negate skills gaps, reduced resourcing requirement by 15% and improved accuracy to compliance legislation",
      "Realigned the 15% resource reduction into profit generation activities, generating 300k per year from additional activity",
    ],
  },
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
    name: "Hey Pharmacist",
    description:
      "Easily order and collect your NHS repeat prescriptions from your trusted local pharmacy or use our free home delivery service from our website or mobile app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: heypharmacist,
    live_link: "https://heypharmacist.co.uk/",
  },
  {
    name: "UAccount",
    description:
      "The UAccount website was an online bank platform for customers and consumers to carry out online banking. The UAccount bank was closed from May 2022 and the website reduced to an FAQ page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: uaccount,
    live_link: "https://www.uaccount.uk/",
  },
  {
    name: "DotDot Loans",
    description:
      "DotDot Loans is an online platform providing customers with a portal to investigate and apply for ethical loans.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: dotdotloans,
    live_link: "https://www.dotdotloans.co.uk/",
  },
  {
    name: "Morses Club",
    description:
      "Morses Club is an online platform providing customers with a portal to investigate and apply for ethical loans.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: morsesImg,
    live_link: "https://www.morsesclub.com/",
  },
  {
    name: "SWG Profession Calculator",
    description:
      "The SWG Profession Calculator is an web offering to a local application which is a utility tool for the popular Star Wars themed MMO",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: swgcalc,
    source_code_link: 'https://github.com/MarcJoyce/SWGProfessionCalculator',
    live_link: "https://marcjoyce.github.io/SWGProfessionCalculator/",
  },
  {
    name: "SWG Utility Calculators",
    description:
      "A collection of utility calculators to aid in aspects of the Star Wars themed MMO",
    tags: [
      {
        name: "html",
        color: "red-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: swgutils,
    // source_code_link: 'https://github.com/MarcJoyce/SWGProfessionCalculator',
    live_link: "https://marcjoyce.com/#/SWG/",
  },
  {
    name: "Father and Son The Karaoke Kings",
    description:
      "A website for local musical content creators who started covering popular songs during lockdown. The website was taken down in Sep 2021 as the duo signed with a popular publishing company",
      tags: [
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
      ],
    image: fask,
    source_code_link: 'https://github.com/MarcJoyce/Father-and-Son-Karaoke',
    live_link: "https://marcjoyce.github.io/Father-and-Son-Karaoke/",
  },
  {
    name: "Disney Plus Clone",
    description:
      "A clone of the popular Disney Plus website, practicing my skills of the MERN stack with Firebase as a hosting provider",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "red-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
    ],
    image: disney,
    source_code_link: 'https://github.com/MarcJoyce/disney-plus-clone',
    live_link: "https://disneyplusclone-c8834.web.app/",
  }
];

export { services, technologies, experiences, testimonials, projects };
