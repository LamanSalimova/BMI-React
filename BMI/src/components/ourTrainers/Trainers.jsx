import React from "react";
import "./trainers.css";
import img1 from "../../assets/images/tr1.jpg";
import img2 from "../../assets/images/tr2.jpg";
import img3 from "../../assets/images/tr3.jpg";
import img4 from "../../assets/images/tr4.jpg";
import img5 from "../../assets/images/tr5.jpg";
import img8 from "../../assets/images/tr8.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillShareFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export default function Trainers() {
  const trainersData = [
    {
      id: 1,
      image: img1,
      trTitle: "Şəhriyar Qurbanov",
      trInfo: "SOCAR / İnsan Resursları üzrə aparıcı mütəxəssis",
    },
    {
      id: 2,
      image: img2,
      trTitle: "Leyla Cəfərli",
      trInfo: "Paşa Sığorta / Təlim və inkişaf şöbəsinin rəhbəri",
    },
    {
      id: 3,
      image: img3,
      trTitle: "Rafiq Hunaltay",
      trInfo: "Fil Agency / Şirkətin təsisçisi, baş direktor",
    },
    {
      id: 4,
      image: img4,
      trTitle: "Təranə Qurbanova",
      trInfo: "Baker Tilly Audit Azərbaycan / HR Direktor",
    },
    {
      id: 5,
      image: img5,
      trTitle: "Elşən Bədirxanov",
      trInfo: "Təlimçi və biznes-məsləhətçi",
    },
    // {
    //   id: 6,
    //   image: img6,
    //   trTitle: "Teymur İslamlı",
    //   trInfo: "Good Finance MMC / vergilər üzrə menecer",
    // },
    // {
    //   id: 7,
    //   image: img7,
    //   trTitle: "Elmi Qurbanlı",
    //   trInfo:
    //     "AzerGold QSC / İnsan Resursları şöbəsi Təşkilati İnkişaf sektoru aparıcı mütəxəssis",
    // },
    {
      id: 8,
      image: img8,
      trTitle: "Ayşən Cabay",
      trInfo: "Business Management School / İnsan Resursları üzrə menecer",
    },
    {
      id: 9,
      image: img3,
      trTitle: "Rafiq Hunaltay",
      trInfo: "Fil Agency / Şirkətin təsisçisi, baş direktor",
    },
  ];

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px", color: "red" }}>{dots}</ul>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <section className="trainersSection">
      <div className="container">
        <div className="trainersWrapper">
          <div className="trainersHeader">
            <span className="line"></span>
            <h4>PEŞƏKAR TƏLİMÇİLƏRDƏN ÖYRƏN</h4>
            <span className="line"></span>
          </div>
          <div className="sliderWrapper">
            <Slider {...settings} className="slider">
              {trainersData.map((item, index) => {
                return (
                  <div className="trainerItem" key={index}>
                    <div className="imgWrapper">
                      <img src={item.image} alt="trainers" />
                    </div>

                    <div className="infoWrapper">
                      <h5>{item.trTitle}</h5>
                      <p>{item.trInfo}</p>
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
