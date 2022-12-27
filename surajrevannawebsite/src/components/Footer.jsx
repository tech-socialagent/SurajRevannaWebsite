import React from "react";
import '../styles/Footer.css'
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import English from '../Englishlang.json';

const Footer = () => {
  return (
    <div className="appFooter" id="appFooter">
      <div className="appLogo">Suraj Revanna</div>
      <div className="copyright">
        {English.siteFooter.copyText.map(item=>{
            return(
                <div key={item} className="copyText">{item}</div>
            )
        })}
      </div>
      <div className="socialLinks">
        <a href="/">
          <AiFillTwitterCircle  className="fIcons"/>
        </a>
        <a href="/">
          <AiFillFacebook className="fIcons"/>
        </a>
        <a href="/">
          <AiFillInstagram className="fIcons"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
