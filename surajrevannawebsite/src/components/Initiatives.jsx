import React from "react";
import English from "../Englishlang.json";
import "../styles/Initiatives.css";

const Initiatives = () => {
  return (
    <section className="initiativesPage" id="initiatives">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{English.siteInitiatives.title}</h3>
          <div className="title_downbar"></div>
        </div>
      </div>
      <div></div>
      <div className="sectionbody">
        {English.siteInitiatives.iniItems.map((item) => {
          return (
            <div className="initiativeItem">
              <div className="initiativeImage">
                <img src={require("../assests/" + item.imgUrl)} alt="" />
              </div>
              <div className="initiativeTitle">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Initiatives;
