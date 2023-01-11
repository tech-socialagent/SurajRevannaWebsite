import React from "react";
import "../styles/Footer.css";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import English from "../Englishlang.json";
import Kannada from "../Kannadalang.json";
import { Link } from "react-router-dom";

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
        <div className="copyText">{Lang.siteFooter.copyText[0]}</div>
        <div className="copyText">{Lang.siteFooter.copyText[1]}</div>
        <Link to={"/privacy"}>
          <div className="copyText">{Lang.siteFooter.copyText[2]}</div>
        </Link>

        {/* {Lang.siteFooter.copyText.map(item=>{
            return(
                <div key={item} className="copyText">{item}</div>
            )
        })} */}
      </div>
      <div className="socialLinks">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Dr_Surajrevanna"
          id="iconTwitter"
        >
          <AiFillTwitterCircle className="fIcons" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/dr.surajrevanna.official/"
          id="iconFacebook"
        >
          <AiFillFacebook className="fIcons" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/dr.surajrevanna_official/"
          id="iconInstagram"
        >
          <AiFillInstagram className="fIcons" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
