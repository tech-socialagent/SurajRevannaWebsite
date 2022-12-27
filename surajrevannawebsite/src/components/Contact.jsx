import React from "react";
import English from "../Englishlang.json";
import Kannada from '../Kannadalang.json';
import "../styles/Contact.css";
import {BsArrowRightCircle} from 'react-icons/bs';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
  

const Contact = () => {
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <section className="contactPage" id="contact" >
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">  
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{Lang.siteContact.title}</h3>
          <div className="title_downbar"></div>
        </div>
      </div>
      <div className="sectionbody">
        <div className="conatctForm">
          <div className="contactBanner">
            <img
              src={require("../assests/" + Lang.siteContact.image)}
              alt=""
            />
          </div>
          <div className="formView">
            <input
              type="text"
              className="formData"
              placeholder={Lang.siteContact.inputPlaceholders[0]}
            />
            <input
              type="text"
              className="formData"
              placeholder={Lang.siteContact.inputPlaceholders[1]}
            />
            <input
              type="text"
              className="formData"
              placeholder={Lang.siteContact.inputPlaceholders[2]}
            />
            <input
              type="text"
              className="formData"
              placeholder={Lang.siteContact.inputPlaceholders[3]}
            />
            <div className="formSubmit"> 
            <div>{Lang.siteContact.submitBtn}</div>
            <BsArrowRightCircle/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
