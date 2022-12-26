import React from "react";
import "../styles/About.css";
import English from "../Englishlang.json";

const About = () => {
  return (
    <section className="aboutPage" id="about">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{English.siteAbout.title}</h3>
          <div className="title_downbar"></div>
        </div>
        <div className="sectionDesc">{English.siteAbout.desc}</div>
        <div className="sectionInfo">
          {English.siteAbout.body.map((item) => {
            return (
              <div>
                <div className="infoTitle">{item.title}</div>
                <div className="infoDesc">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
      <div className="sectionbody">
        <img
          className="aboutImage"
          src={require("../assests/" + English.siteAbout.img)}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
