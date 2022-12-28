import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Initiatives from "./components/Initiatives";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.querySelector(".homeBody").scrollHeight
      ) {
        document.querySelector(".Nav_body").classList.add("white_bg");
        document.querySelector(".nav_item a").classList.add("white_bg_text");

        console.log("oh yes");
      } else {
        document.querySelector(".Nav_body").classList.remove("white_bg");
      }
    });
  });

  return (
    <div className="appBody-main">
      <div className="socialSideLinks">
        <a href="/" id="iconTwitter">
          <AiFillTwitterCircle className="fIcons" />
        </a>
        <a href="/" id="iconFacebook">
          <AiFillFacebook className="fIcons" />
        </a>
        <a href="/" id="iconInstagram">
          <AiFillInstagram className="fIcons" />
        </a>
        <div className="sideSocialLine"></div>
        <div className="sideText">SOCIALS</div>
      </div>
      <div className="appBodyPages">
        <Navbar />
        <Home/>
        <About />
        <News />
        <Gallery />
        <Initiatives />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
export default App;
