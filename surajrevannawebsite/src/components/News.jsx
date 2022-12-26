import React from "react";
import English from "../Englishlang.json";
import "../styles/News.css";

const News = () => {
  return (
    <section className="newsPage" id="news">
      <div className="sectionHeader">
        <div className="sectionHeaderTitle">
          <div className="title_upbar"></div>
          <h3 className="sectionTitle">{English.siteNews.title}</h3>
          <div className="title_downbar"></div>
        </div>
        <div className="sectionDesc">{English.siteNews.desc}</div>
      </div>
      <div className="sectionbody">
        {English.siteNews.newsItems.map((item) => {
          return (
            <div className="newsItem">
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
