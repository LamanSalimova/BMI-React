import React from "react";
import "./news.css";
import newsImg1 from "../../assets/images/newsImg1.png";
import newsImg2 from "../../assets/images/newsImg2.png";
import newsImg3 from "../../assets/images/newsImg3.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="newsSection">
      <div className="container">
        <div className="newsWrapper">
          <div className="newsHeader">
            <span className="line"></span>
            <h4>XƏBƏRLƏR</h4>
            <span className="line"></span>
          </div>
          <div className="newsList">
            <Slider {...settings}>
              {newsData.map((item) => {
                return (
                  <div className="newsItemCard" key={item.id}>
                    <div className="imgWrapper">
                      <img src={item.image} alt={item.newsTitle} />
                    </div>
                    <div className="cardContent">
                      <h5>{item.newsTitle}</h5>
                      <p>{item.newsInfo}</p>
                      <div className="btnWrapper">
                        <Link to={`/newsDetails/${item.id}`} className="link">
                          Ətraflı…
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
