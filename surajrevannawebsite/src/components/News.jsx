import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import English from "../Englishlang.json";
import Kannada from '../Kannadalang.json';
import "../styles/News.css";

const News = () => {
  const curLang = useSelector((state) => state.language.webLanguage);

  const [Lang, setLang] = useState(English);

  useEffect(() => {
    if (curLang === "english") setLang(English);
    else if (curLang === "kannada") setLang(Kannada);
  }, [curLang]);

  return (
    <section className="newsPage" id="news">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{Lang.siteNews.title}</h3>
          <div className="title_downbar"></div>
        </div>
        {/* <div className="sectionDesc">{Lang.siteNews.desc}</div> */}
      </div>
      <div className="sectionbody">
        {Lang.siteNews.newsItems.map((item) => {
          return (
            <div className="newsItem" key={item.newstitle}>
              <div className="newsImage">
                <img src={require("../assests/" + item.newsImg)} alt="" />
              </div>
              <div className="newsTitle">{item.newstitle}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
