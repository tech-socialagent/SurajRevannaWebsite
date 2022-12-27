import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import English from "../Englishlang.json";
import Kannada from '../Kannadalang.json';
import "../styles/Initiatives.css";

const Initiatives = () => {
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <section className="initiativesPage" id="initiatives">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{Lang.siteInitiatives.title}</h3>
          <div className="title_downbar"></div>
        </div>
      </div>
      <div></div>
      <div className="sectionbody">
        {Lang.siteInitiatives.iniItems.map((item) => {
          return (
            <div className="initiativeItem" key={item}>
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
