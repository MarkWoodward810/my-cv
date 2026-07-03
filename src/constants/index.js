import {
  electronics,
  software,
  creator,
  mechanical,
  javascript,
  e3,
  pinna,
  ocado,
  series600,
  botcommsGif,
  Twincathmi,
  OcadoPick,
  ClickCollect,
  solidworks,
  onshape,
  altium,
  gitlab,
  twincat,
  python,
  cProg,
  ies,
  fusion360,
  linux,
  java,
  jira,
  autocad,
  pinnaPDF,
  bristol,
  bestStudent,
  peerAward
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
    title: "Mechanical Design",
    icon: mechanical,
  },
  {
    title: "Electronics & Testing",
    icon: electronics,
  },
  {
    title: "Embedded Systems",
    icon: software,
  },
  {
    title: "Product Development",
    icon: creator,
  },
];

const awards = [
  {
    name: "Bristol",
    icon: bristol,
  },
  {
    name: "Best Student",
    icon: bestStudent,
  },
  {
    name: "Peer Award",
    icon: peerAward,
  },
];

const technologies = [
  {
    name: "Onshape",
    icon: onshape,
  },
  {
    name: "Solidworks",
    icon: solidworks,
  },
  {
    name: "Altium",
    icon: altium,
  },
  {
    name: "C",
    icon: cProg,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "twincat",
    icon: twincat,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "ies",
    icon: ies,
  },
  {
    name: "fusion360",
    icon: fusion360,
  },
  {
    name: "Autocad",
    icon: autocad,
  },
];

const experiences = [
    {
    title: "Mechanical Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Present",
    points: [
      "Led mechanical development of a legacy material handling station with major changes to four key subsystems. Coordinated prototype builds, user and safety-critical testing, and detailed design on an accelerated timeline.",
      "Collaborated across electrical, software, operations and compliance teams to align on design delivery. Provided detailed drawings to ISO BS8888 for manufacture and procedure manuals for install and commissioning.",
      "Owned subsystem R&D for a first-of-its-kind, public-facing grocery collection station, taking designs from concept throught to production using 3D CAD, design reviews, rapid prototyping, testing and supplier engagement to meet ambitious requirements and timelines.",
       {
        label: "Key skills:",
        value: "Leadership, SOLIDWORKS, Onshape, DfM/DfA, BS8888, GD&T, Design Methods, UX Design, Problem-Solving, Jira",
      },
    ],
  },
    {
    title: "Mechatronics Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Mar 2025 - Sep 2025",
    points: [
      "Led evaluation and integration of next-generation sensor hardware for the Ocado 600 series bot, delivering key findings through reports and presentations.",
      "Co-invented patent 'Device with helical cable arrangement' to enable a Bot harness cost-down by leading CAD development, prototyping and testing.",
      "Designed and built automated test rigs to simulate bot behavior and verify concepts, integrating electronics, embedded control systems and mechancal components.",
      {
        label: "Key skills:",
        value: "Onshape, Additive Manufacturing (FDM, MJF), Java, C/C++, Arduino, Raspberry Pi, Linux, GitLab, Data Analysis, Collaboration",
      },
      {
        label: "Patents:",
        value: "GB2513219.2 'Device with helical cable arrangement' - Filed",
      },
    ],
  },
  {
    title: "Hardware Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Mar 2025",
    points: [
      "Led testing efforts for a cutting-edge bot radio system by designing connectivity test cases and scaling test capabilities from a 150-client testbed to a 400-client testbed.",
      "Developed and maintained network-level scripts for embedded systems to simulate production scenarios and troubleshoot connectivity issues.",
      "Analysed large datasets using Python and presented key findings to the team that played a central role in de-risking the product deployment timeline.",
      {
        label: "Key skills:",
        value: "Python, Bash, Linux, GitLab, Excel, Embedded Systems, Data Analysis, Wireless Technology, Leadership, Teamwork",
      },
    ],
  },
  {
    title: "PLC Software Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Sep 2024",
    points: [
      "Spearheaded the development of a Human Machine Interface (HMI) used for testing and commisioning peripheral machines.",
      "Implemented a modular design, adding features using continuous integration methods, and demonstrated scalability across two prototypes.",
      "Successfully integrated the HMI with Ocado’s software stack and documented the application architecture to enable future development.",
      {
        label: "Key skills:",
        value: "TwinCAT PLC, User Interface Design, JavaScript, HTML/CSS, GitLab, APIs, Communication",
      },     
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Ocado Technology",
    icon: ocado,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Mar 2024",
    points: [
      "Led upgrades to third party material handling equipment including design, prototype and testing at client sites.",
      "Contributed to technical design standards and worked closely with third-party suppliers to ensure high-quality delivery of solutions.",
      "Developed a practical appreciation for testing in live settings, stakeholder alignment and product behaviour in real-world conditions.",
      {
        label: "Key skills:",
        value: "Onshape, BIM360, SCADA, Product Standards, On-Site Experience, Communication",
      },
    ],
  },
  {
    title: "Assistant Engineer",
    company_name: "E3 Consulting Engineers",
    icon: e3,
    iconBg: "#6B8C48",
    date: "Jun 2020 - Jul 2021",
    points: [
      "Developed the ability to contribute to a small, dynamic design consultancy by collaborating in team meetings and design reviews.", 
      "Simulated thermal and energy performance of buildings using architectural data, and produced detailed mechanical and electrical drawings in AutoCAD.", 
      "Attended site visits to review progress of construction and the handover process of mechanical and electrical services to clients.",
      {
        label: "Key skills:",
        value: "AutoCAD, IES VE, Simulation, Excel, Communication, Time Management, On-site Experience",
      },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Mark was a core contributor to the very successful concept de-risk phase of a new cost down radio product for 600s bots. As I write this today the radio system is live in production, and Mark's test framework is still in use.",
    name: "Chris Roff",
    designation: "Senior Engineering Manager",
    company: "Ocado Technology",
  },
  {
    testimonial:
      "Mark has independently managed a project end-to-end, engaging effectively with stakeholders to clearly define requirements and ensure alignment across all parties. Mark is driven, dependable and able to deliver results with minimal supervision.",
    name: "Waqar Moazzam",
    designation: "Engineering Manager",
    company: "Ocado Technology",
  },
  {
    testimonial:
      "Mark quickly adapted to the Continuous Integration methodology. He not only learned the necessary tools but also proposed meaningful improvements - significantly contributing to the project's success.",
    name: "Nicola Zippo",
    designation: "Staff Software Engineer",
    company: "Ocado Technology",
  },
];

const projects = [
    {
    name: "600 Series Bot Harnessing",
    description:
      "Developed a patented cable harnessing solution for the next-generation 600 Series Bot, leading CAD development and prototyping, and verifying performance through accelerated life testing, automated data collection and analysis.",
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
    image: series600,
    source_code_link: "https://www.ocadogroup.com/newsroom/news/ocado-groups-additive-first-bot",
  },
  {
    name: "Click & Collect",
    description:
      "Owned subsystem R&D for an industry pioneering grocery click & collect station fully integrated with an automated storage and retrieval system (ASRS). Led concepting, design reviews, prototyping and testing to deliver production-ready designs.",
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
    image: ClickCollect,
    source_code_link: "https://www.ocadogroup.com/our-solutions/online-grocery/fulfilment/store-based-automation",
  },
  {
    name: "Active Robotic Pinna",
    description:
      "Academic research on a novel robotic ear with soft, silent fluidic actuation designed to improve sound localisation in robots. I designed, built and tested this bioinspired proof of concept, and my research was submitted for publishing.",
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
    image: pinna,
    source_code_link: "",
    pdf_link: pinnaPDF
  },
  {
    name: "Inventory Handling Station",
    description:
      "Served as the Technical Lead for the development of Ocado's Inventory Handling Station, collaborating across disciplines to deliver the highly integrated electromechanical system to production on an accelerated timeline.",
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
    image: OcadoPick,
    source_code_link: "https://ocadointelligentautomation.com/systems/workstations/pick-store",
  },
  {
    name: "Bot Radio Test Framework",
    description:
      "Coordinated test efforts of a new Bot radio product on a dense, large-scale wireless testbed. By designing test cases, executing production scenarios, and analysing results, I enhanced the test framework and enabled multi-team testing.",
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
    image: botcommsGif,
    source_code_link: "https://careers.ocadogroup.com/blogs/hello-robot",
  }, 
  {
    name: "TwinCAT HMI",
    description:
      "Led development of a Human Machine Interface (HMI) critical for diagnosing material handling stations in a warehouse environment. The HMI integrated with the Ocado's software stack and was utilised for testing and commisioning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Twincathmi,
    source_code_link: "https://www.beckhoff.com/en-en/products/automation/twincat-3-hmi/",
  },
];

export { services, awards, technologies, experiences, testimonials, projects };