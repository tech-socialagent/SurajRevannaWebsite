import React from "react";
import "../styles/About.css";
import English from "../Englishlang.json";
import Kannada from '../Kannadalang.json';
import { useState ,useEffect} from "react";
import { useSelector } from "react-redux";

const About = () => {
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(Kannada);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <section className="aboutPage" id="about">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{Lang.siteAbout.title}</h3>
          <div className="title_downbar"></div>
        </div>
        <div className="sectionDesc">{Lang.siteAbout.desc}</div>
        <div className="sectionInfo">
          {Lang.siteAbout.body.map((item) => {
            return (
              <div key={item.title}>
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
          src={require("../assests/" + Lang.siteAbout.img)}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
