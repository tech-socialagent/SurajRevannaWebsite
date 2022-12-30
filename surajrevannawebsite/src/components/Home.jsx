import React from "react";
import "../styles/Home.css";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import English from "../Englishlang.json";
import Kannada from "../Kannadalang.json";

const Home = () => {
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <div className="homeBody" id="home">
      <div className="homeText">
        <div className="homeTitle">{Lang.siteHome.homeTitle}</div>
        <div className="homeSubtitle">{Lang.siteHome.homeSubTitle}</div>
      </div>
      {/* <div className="homeImage">
        <img src={require("../assests/Annaphoto.png")} alt="" />
      </div> */}
    </div>
  );
};

export default Home;
