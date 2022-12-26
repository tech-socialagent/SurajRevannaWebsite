import React from "react";
import English from "../Englishlang.json";
import "../styles/Gallery.css";

const Gallery = () => {
  return (
    <section className="galleryPage" id="gallery">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{English.siteGallery.title}</h3>
          <div className="title_downbar"></div>
        </div>
        <div className="sectionDesc">{English.siteGallery.desc}</div>
        <div className="sectionInfo"></div>
      </div>
      <div className="sectionbody">
        {English.siteGallery.images.map((item) => {
          return (
            <div className="imageItem">
                <img src={require("../assests/" + item)} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
