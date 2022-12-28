import React from "react";
import '../styles/Footer.css'
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import English from '../Englishlang.json';
import Kannada from '../Kannadalang.json';


const Footer = () => {
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <div className="appFooter" id="appFooter">
      <div className="appLogo">{Lang.siteHeader.appLogo}</div>
      <div className="copyright">
        {Lang.siteFooter.copyText.map(item=>{
            return(
                <div key={item} className="copyText">{item}</div>
            )
        })}
      </div>
      <div className="socialLinks">
        <a href="/" id="iconTwitter">
          <AiFillTwitterCircle  className="fIcons"/>
        </a>
        <a href="/" id="iconFacebook">
          <AiFillFacebook className="fIcons"/>
        </a>
        <a href="/" id="iconInstagram">
          <AiFillInstagram className="fIcons"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
