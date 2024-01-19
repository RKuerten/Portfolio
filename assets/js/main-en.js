import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription-en.js";
import { menu } from "./menu.js";
import { handleMobileEnglish } from "./handleMobile.js";

handleMobileEnglish();
menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".ist",
  `As the UX leader of the IT team at IST Londrina, I did UX & UI design (with high-fidelity prototypes, with or without navigation via Figma), usability tests (online via MS Teams), user interviews, creation of interface flows (with use cases), scope definition of projects, and UX lectures and workshops (<a href="https://www.youtube.com/watch?v=O8p4LZabuf0&t=81s" rel="noopener" target="_blank" id="lecture">link of an online lecture recorded and held in Oct/2022</a>). I also vectorized logos and created visual assets, such as banners, posters, and visual identity for internal company events.`,
  "UX/UI Analyst",
  "IST SENAI Londrina",
  "Dec 2021 - Jan 2024 (2 years & 2 months)"
);
hoverChangeExperience(
  ".lets",
  `At LET'S (a software and digital marketing company), I worked as a hybrid UX/Front-End dev, designing and creating the flow of web/mobile applications (with prototypes in Figma), and programming the front-end with React (web) or React Native (mobile).`,
  "UX/Front-End Developer",
  "LET'S Comunicação e Desenvolvimento",
  "Jun 2021 - Nov 2021 (5 months)"
);
hoverChangeExperience(
  ".mystra",
  `At Mystra (a software factory), I worked as a Product Designer, working on the design and flow of web/mobile applications (with prototypes in Figma and user interviews), and front-end programming in React (web) or React Native (mobile), with some back-end development occasions as well, with Spring Framework (Java).`,
  "Product Designer",
  "Mystra Tecnologia",
  "Jan 2020 - Jun 2021 (1 year & 6 months)"
);
hoverChangeExperience(
  ".veltec",
  `At Veltec, a fleet telemetry company, I had the opportunity to participate in an internship program in two different areas: from April to December 2018, I worked in the Data Science sector, delivering fleet movement analysis (with Python and SQL), structuring internal data, and creating web visualizations (with JS). From January to October 2019, I worked in the UX sector, where I created wireframes, low and high-fidelity prototypes with paper/Figma, did usability tests, conducted user interviews, and worked on scope definitions and detailed development stories.`,
  "Intern",
  "Veltec",
  "Apr 2018 - Oct 2019 (1 year & 6 months)"
);
hoverChangeExperience(
  ".r2chopp",
  `At R2 Choperia, I worked informally sporadically as a bartender, usually on weekends and vacation periods of the student year (high school or college). The bartender's work consisted of: organizing the work space, cleaning glasses and utensils in the establishment, preparing drinks.`,
  "Bartender",
  "R2 Choperia",
  "Dec 2011 - Dec 2019 (8 years)"
);

hoverChangeDescription(
  ".figma",
  "Figma is a free, online and collaborative tool for graphically editing vectors and prototype design projects."
);
hoverChangeDescription(
  ".canva",
  "Canva is an online graphic design platform that allows users to create social media graphics, presentations, infographics, posters, and other visual content."
);
hoverChangeDescription(
  ".homebrewery",
  "Homebrewery is an online layout design tool (through HTML, CSS, and Markdown) focused on creating tabletop RPG products."
);
hoverChangeDescription(
  ".photoshop",
  "Adobe Photoshop is the market-leading software for editing digital images in a complete and professional way."
);
hoverChangeDescription(
  ".html",
  "HTML is a markup language for web browsers, where we mark elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language made up of “layers”, created for the purpose of styling web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a stylesheet preprocessor that adds new features to CSS."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic and complex behaviors on web pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features that are not present in the language natively, in addition to making it static and less prone to errors."
);
hoverChangeDescription(
  ".react",
  "React is an open source JavaScript framework focused on creating web interfaces in a componetized way."
);
hoverChangeDescription(
  ".native",
  "React Native is a Javascript framework developed to create applications for Android and iOS systems with a single code base."
);
hoverChangeDescription(
  ".java",
  "Java is a cross-platform, object-oriented, network-centric language that can be used as a platform in itself."
);
