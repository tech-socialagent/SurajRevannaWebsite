import "../styles/Navbar.css";
import { BiX, BiMenu, BiCaretDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import English from "../Englishlang.json";
import Kannada from "../Kannadalang.json";
import { useDispatch, useSelector } from "react-redux";
import { toEnglish, toKannada } from "./store/store";

const Navbar = () => {
  //redux store use lang
  const dispath = useDispatch();
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  const [menuBtn, setMenuBtn] = useState(false);
  const navMenuToggle = () => {
    setMenuBtn(!menuBtn);

    document.querySelector(".nav_menu").classList.toggle("to_right");
  };
  return (
    <div className="Nav_body">
      <div className="app_logo">
        <a href="/">{/* <img src={require("")} alt="" /> */}</a>
      </div>
      <div className="menu_bar" onClick={navMenuToggle}>
        {!menuBtn ? <BiMenu /> : <BiX />}
      </div>

      <div className="nav_menu">
        <ul className="nav_items">
          <li className="nav_item">
            <a href="#home">{Lang.siteHeader.headerRoutes[0]}</a>
          </li>
          <li className="nav_item">
            <a href="#about">{Lang.siteHeader.headerRoutes[1]}</a>
          </li>
          <li className="nav_item">
            <a href="#news">{Lang.siteHeader.headerRoutes[2]}</a>
          </li>
          <li className="nav_item">
            <a href="#gallery">{Lang.siteHeader.headerRoutes[3]}</a>
          </li>
          <li className="nav_item">
            <a href="#initiatives">{Lang.siteHeader.headerRoutes[4]}</a>
          </li>
        </ul>
        <a className="get_quote_btn nav-btn" href={"#getquote"}>
          {Lang.siteHeader.contactBtn}
        </a>
        {/* language change button */}
        <div className="dropdown" style={{ float: "right" }}>
          <button className="dropbtn">
            {curLang.charAt(0).toUpperCase() + curLang.slice(1)}
            <span>
              <BiCaretDown />
            </span>
          </button>
          <div className="dropdown-content">
            <div onClick={() => dispath(toEnglish())}>English</div>
            <div onClick={() => dispath(toKannada())}>Kannada</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
