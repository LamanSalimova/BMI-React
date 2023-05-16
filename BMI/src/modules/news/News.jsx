import React from "react";
import "./news.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import newsImg1 from "../../assets/images/newsImg1.png";
import newsImg2 from "../../assets/images/newsImg2.png";
import newsImg3 from "../../assets/images/newsImg3.png";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
export default function News() {
  const newsData = [
    {
      id: 1,
      image: newsImg1,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 2,
      image: newsImg2,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 3,
      image: newsImg3,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 4,
      image: newsImg2,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 5,
      image: newsImg3,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 6,
      image: newsImg1,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 7,
      image: newsImg3,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 8,
      image: newsImg1,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
    {
      id: 9,
      image: newsImg2,
      newsTitle: "LOREM IPSUM IS SIMPLY",
      newsInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s…",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="pageHeader">
            <div className="rootLinks">
              <Link to={ROUTES.HOME} className="routerLinkItem">
                Ana səhifə
              </Link>
              <AiOutlineRight className="chevronRight" />
              <Link to={ROUTES.NEWS} className="routerLinkItem">
                Xəbərlər
              </Link>
            </div>
            <h3>XƏBƏRLƏR</h3>
          </div>
          <div className="newsGrid">
            {newsData.map((item) => {
              return (
                <div className="newsItemCard" key={item.id}>
                  <div className="imgWrapper">
                    <img src={item.image} alt="news" />
                  </div>
                  <div className="cardContent">
                    <h5>{item.newsTitle}</h5>
                    <p>{item.newsInfo}</p>
                    <div className="btnWrapper">
                      <Link to={`/newsDetails/${item.id}`}>Ətraflı…</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
