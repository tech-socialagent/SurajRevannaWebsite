import React from "react";
import English from "../Englishlang.json";
import "../styles/Contact.css";
import {BsArrowRightCircle} from 'react-icons/bs'

const Contact = () => {
  return (
    <section className="contactPage" id="contact" >
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{English.siteContact.title}</h3>
          <div className="title_downbar"></div>
        </div>
      </div>
      <div className="sectionbody">
        <div className="conatctForm">
          <div className="contactBanner">
            <img
              src={require("../assests/" + English.siteContact.image)}
              alt=""
            />
          </div>
          <div className="formView">
            <input
              type="text"
              className="formData"
              placeholder={English.siteContact.inputPlaceholders[0]}
            />
            <input
              type="text"
              className="formData"
              placeholder={English.siteContact.inputPlaceholders[1]}
            />
            <input
              type="text"
              className="formData"
              placeholder={English.siteContact.inputPlaceholders[2]}
            />
            <input
              type="text"
              className="formData"
              placeholder={English.siteContact.inputPlaceholders[3]}
            />
            <div className="formSubmit"> 
            <div>{English.siteContact.submitBtn}</div>
            <BsArrowRightCircle/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
