import React, { Component } from "react";
import "./Timeline.css";
import Timeitem from "../../components/Timeitem/Timeitem.js";

import halfgiants from "./jobImages/half-giants.png";
import lontriniano from "./jobImages/lontriniano.png";
import mournland from "./jobImages/mournland.png";
import marksman from "./jobImages/marksman.png";
import magewright from "./jobImages/magewright.png";
import warlords from "./jobImages/warlords.png";
import legacy from "./jobImages/legacy.png";
import warforged from "./jobImages/warforged.png";
import gravenhollow from "./jobImages/gravenhollow.png";
import stormcaller from "./jobImages/stormcaller.png";

import fkgroup from "./jobImages/FKG.png";
import goldenbelle from "./jobImages/GB.png";
import hellpi from "./jobImages/Hellpi.png";
import portfolio from "./jobImages/portfolio.png";

const rpgJobs = [
  {
    date: "AUG/2020",
    title: "The Stormcaller",
    desc:
      "The Stormcaller presents a brand new Ranger archetype for your Eberron campaigns! It also includes four new spells themed around the dangerous Thunder Sea.",
    tags: ["D&D 5E", "EBERRON", "SUBCLASS", "SPELLS"],
    image: stormcaller,
    link: "https://www.dmsguild.com/product/326206/The-Stormcaller",
    type: "Content tags:",
  },
  {
    date: "APR/2020",
    title: "Lost Spellbooks of Gravenhollow",
    desc:
      "Lost Spellbooks of Gravenhollow presents five famous spellbooks from Faerûn history, along with 25 new spells distributed among then! It can also be used to present seeds for DMs running the Out of the Abyss adventure.",
    tags: ["D&D 5E", "CAMPAIGN SEEDS", "FORGOTTEN REALMS", "SPELLS"],
    image: gravenhollow,
    link:
      "https://www.dmsguild.com/product/311620/Lost-Spellbooks-of-Gravenhollow",
    type: "Content tags:",
  },
  {
    date: "APR/2020",
    title: "Warforged: Revisited",
    desc:
      "Warforged: Revisited is a revision of the famous Warforged from Eberron. It presents a new version of the race, with 5 subraces. It also includes 12 racial feats for Warforged characters, and 5 new magic items.",
    tags: [
      "D&D 5E",
      "EBERRON",
      "RACE REVISION",
      "MAGIC ITEMS",
      "FEATS",
      "BEST COPPER SELLER (+50 COPIES SOLD)",
    ],
    image: warforged,
    link: "https://www.dmsguild.com/product/309585/Warforged-Revisited",
    type: "Content tags:",
  },
  {
    date: "MAR/2020",
    title: "Dwarven Legacy",
    desc:
      "Dwarven Legacy is a collection of player options for Dwarf characters. Includes 2 new dwarf subraces, 3 new subclasses, 18 new feats, and 18 new magic items!",
    tags: ["D&D 5E", "SUBRACES", "SUBCLASSES", "MAGIC ITEMS", "FEATS"],
    image: legacy,
    link: "https://www.dmsguild.com/product/306734/Dwarven-Legacy",
    type: "Content tags:",
  },
  {
    date: "DEC/2019",
    title: "Warlords of Avernus",
    desc:
      "Warlords of Avernus is a small expansion for the fifth edition campaign Baldur's Gate: Descent into Avernus. It presents four new warlords for DMs to use as threats of the first layer of the Nine Hells.",
    tags: [
      "D&D 5E",
      "CAMPAIGN SEEDS",
      "MONSTERS",
      "MAGIC ITEMS",
      "BEST GOLD SELLER (+500 COPIES SOLD)",
    ],
    image: warlords,
    link: "https://www.dmsguild.com/product/297172/Warlords-of-Avernus",
    type: "Content tags:",
  },
  {
    date: "NOV/2019",
    title: "The Magewright - an Eberron sidekick class!",
    desc:
      "A sidekick class for the Eberron campaign setting – the Magewright. Includes 11 specialties, all featuring a 1st-level stat block: Blacksmith, Entertainer, Harborer, Healer, Lamplighter, Locksmith, Mediator, Medium, Oracle, Seedsman, and Tamer.",
    tags: ["D&D 5E", "SIDEKICK", "BEST COPPER SELLER (+50 COPIES SOLD)"],
    image: magewright,
    link:
      "https://www.dmsguild.com/product/295312/The-Magewright--an-Eberron-sidekick-class",
    type: "Content tags:",
  },
  {
    date: "OCT/2019",
    title: "Tome of the Wild Marksman",
    desc:
      "Tome of the Wild Marksman is a compendium of player options, including 2 new races, 11 new subclasses, a light revision of the Ranger class, 15 new feats, 26 new magic items, and 20 new beasts!",
    tags: [
      "D&D 5E",
      "RACE",
      "SUBCLASS",
      "CLASS REVISION",
      "FEATS",
      "MAGIC ITEMS",
      "MONSTERS",
      "BEST COPPER SELLER (+50 COPIES SOLD)",
    ],
    image: marksman,
    link: "https://www.dmsguild.com/product/292992/Tome-of-the-Wild-Marksman",
    type: "Content tags:",
  },
  {
    date: "JUN/2019",
    title: "Kendal Santor's Treatise on the Mournland",
    desc:
      "Kendal Santor's Treatise on the Mournland is a compendium of monsters and adventure seeds for the region of Mournland, from the Eberron campaign setting. I collaborated with a monster design: the Mournisaurus.",
    tags: [
      "D&D 5E",
      "EBERRON",
      "ADVENTURE SEEDS",
      "MONSTERS",
      "LORE",
      "BEST GOLD SELLER (+500 COPIES SOLD)",
    ],
    image: mournland,
    link:
      "https://www.dmsguild.com/product/280264/Kendal-Santors-Treatise-on-the-Mournland",
    type: "Content tags:",
  },
  {
    date: "MAY/2019",
    title: "Raça Lontriniana",
    desc:
      "The Brazilian Portuguese release of the Lutrinian Race by Nathanael Roux, originally published in English and French, translated from English. Includes a new race with three sub-races and new feats.",
    tags: ["D&D 5E", "RACE", "FEATS", "PT-BR"],
    image: lontriniano,
    link:
      "https://www.dmsguild.com/product/276159/Raca-Lontriniana--Uma-nova-raca-para-o-maior-RPG-do-mundo",
    type: "Content tags:",
  },
  {
    date: "OCT/2018",
    title: "The Half-Giants",
    desc:
      "A new race for the fifth edition of Dungeons & Dragons! Includes six sub-races and seven racial feats.",
    tags: ["D&D 5E", "RACE", "FEATS", "BEST SILVER SELLER (+100 COPIES SOLD)"],
    image: halfgiants,
    link: "https://www.dmsguild.com/product/254961/The-HalfGiants",
    type: "Content tags:",
  },
];

const uxJobs = [
  {
    date: "MAR/2021",
    title: "Portfolio",
    desc:
      "My own portfolio, designed with React. Includes my TTRPG work credits and all my UX/UI Design contributions. Deployed from Github with Netlify.",
    tags: ["REACT", "CSS", "JAVASCRIPT", "NETLIFY"],
    image: portfolio,
    link: "https://rodrigokuerten.com.br",
    type: "Technologies used:",
  },
  {
    date: "JUN/2020",
    title: "Hellpi",
    desc:
      "I worked as the Lead UX Designer and Front-End Developer for the Hellpi application: a stack composed of two mobile apps (made with React Native), one for the clients, other for the professionals; an admin panel made with React.js, and the back-end; powered by Spring Framework (Java). Hellpi is a platform that aims to facilitate the hiring of service providers to solve problems and improve people's daily lives.",
    tags: ["FIGMA", "UI DESIGN", "REACT NATIVE", "REACT", "SPRING FRAMEWORK"],
    image: hellpi,
    link: "https://play.google.com/store/apps/developer?id=Hellpi+Tecnologia+Ltda",
    type: "Technologies used:",
  },
  {
    date: "MAR/2020",
    title: "GoldenBelle",
    desc:
      "I worked as the Assistant UI Designer and Front-End Developer for the GoldenBelle project: a payment application for the jewelry store GoldenBelle. It is made of three parts: a mobile application made with React Native, an admin panel made with React.js, and the back-end; powered by Spring Framework (Java).",
    tags: ["FIGMA", "UI DESIGN", "REACT NATIVE", "REACT", "SPRING FRAMEWORK"],
    image: goldenbelle,
    link: "https://www.goldenbelle.com.br/",
    type: "Technologies used:",
  },
  {
    date: "OCT/2018",
    title: "F&K Group - Website",
    desc:
      "I worked as a freelance with F&K Group's TI departament to launch a new website for F&K Group. Highlights of the job included choosing a suitable theme and color palette for the company logo and exercise my UX writing skills. Done with Wordpress. Currently, this version of the website is no longer available, but can be accessed through Web Archive.",
    tags: ["WORDPRESS", "CSS"],
    image: fkgroup,
    link: "http://web.archive.org/web/20181118043134/http://fkgroup.com.br/",
    type: "Technologies used:",
  },
];

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      type: "ux",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ type: event.target.value });
  }

  render() {
    let { type } = this.state;
    const jobs = type === "rpg" ? rpgJobs : uxJobs;

    return (
      <div className="section-timeline">
        <h1 className="timeline-heading">Portfolio</h1>
        <p className="timeline-subheading">
          The timeline below presents all my works, from newest to oldest.
        </p>
        <label>Job type:</label>
        <select value={type} onChange={this.handleChange}>
          <option value="ux">UX/UI Design</option>
          <option value="rpg">TTRPG Design &amp; Writing</option>
        </select>
        <ul>
          {jobs.map((item, index) => (
            <Timeitem
              key={index}
              date={item.date}
              description={item.desc}
              image={item.image}
              link={item.link}
              tags={item.tags}
              title={item.title}
              type={item.type}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Timeline;
