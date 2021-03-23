import React, { Component } from "react";
import "./Profile.css";

import eu from "./Eu.png";
import dmsguild from "./dmsguild.png";
import github from "./github.png";
import linkedin from "./linkedin.png";
import mail from "./mail.png";
import telegram from "./telegram.png";
import twitter from "./twitter.png";

class Profile extends Component {
  render() {
    return (
      <aside className="section-profile">
        <div className="profile-holder">
          <div className="first-profile">
            <div className="profile-info">
              <figure className="img-holder">
                <img src={eu} alt="Page Author" />
              </figure>
              <h1>RODRIGO KUERTEN</h1>
              <p>PRODUCT DESIGNER @ MYSTRA</p>
              <p>TTRPG DESIGNER</p>
            </div>
          </div>
          <div className="second-profile">
            <div className="profile-description">
              <p>
                Bachelor in Computer Science @ State University of Londrina
                (UEL). Currently working as a Product Designer at Mystra
                Technologies.
              </p>
            </div>
          </div>
          <div className="third-profile">
            <h5>Contact and Links:</h5>
            <div className="profile-icons">
              <a
                className="icon-link"
                href="https://www.dmsguild.com/browse.php?author=Rodrigo%20Kuerten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={dmsguild} alt="DMs Guild" />
              </a>
              <a
                className="icon-link"
                href="mailto:rodkue@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mail} alt="E-mail" />
              </a>
              <a
                className="icon-link"
                href="https://github.com/RKuerten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/rodrigo-kuerten/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                className="icon-link"
                href="https://t.me/RodrigoKuerten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt="Telegram" />
              </a>
              <a
                className="icon-link"
                href="https://twitter.com/R_Kuerten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Profile;
