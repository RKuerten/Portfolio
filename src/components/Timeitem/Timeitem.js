import React, { Component } from "react";
import "./Timeitem.css";

class Timeitem extends Component {
  render() {
    let { date, title, description, type, tags, image } = this.props;

    return (
      <li className="section-time-item">
        <div className="date-area">
          <p className="date-show">{date}</p>
        </div>
        <div className="job-area">
          <div className="job-holder">
            <div className="job-info">
              <h2 className="job-title">{title}</h2>
              <h5 className="job-subtitle">{description}</h5>
              <div className="job-tags-holder">
                <p className="job-tags-title">{type}</p>
                {tags.map((item, index) => (
                  <span className="job-tag" key={index}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="job-image-holder">
              <img className="job-image" src={image} alt="Job" />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Timeitem;
