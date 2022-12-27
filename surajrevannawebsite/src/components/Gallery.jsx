import React from "react";
import English from "../Englishlang.json";
import Kannada from '../Kannadalang.json';
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/Gallery.css";

const Gallery = () => {
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <section className="galleryPage" id="gallery">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{Lang.siteGallery.title}</h3>
          <div className="title_downbar"></div>
        </div>
        <div className="sectionDesc">{Lang.siteGallery.desc}</div>
        <div className="sectionInfo"></div>
      </div>
      <div className="sectionbody">
        {Lang.siteGallery.images.map((item) => {
          return (
            <div className="imageItem" key={item}>
                <img src={require("../assests/" + item)} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
