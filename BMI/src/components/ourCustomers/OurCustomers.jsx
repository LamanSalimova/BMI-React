import React, { Component } from "react";
import "./ourCustomers.css";
import logo1 from "../../assets/images/cus1.png";
import logo2 from "../../assets/images/cus2.png";
import logo3 from "../../assets/images/cus3.png";
import logo4 from "../../assets/images/cus4.png";
import logo5 from "../../assets/images/cus5.png";
import logo6 from "../../assets/images/cus6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function OurCustomers() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="ourCustomersSection">
      <div className="container">
        <div className="customersHeader">
          <span className="line"></span>
          <h4>MÜŞTƏRİLƏRİMİZ</h4>
          <span className="line"></span>
        </div>
        <div className="customerSlide">
          <Slider {...settings} className="slider">
            <div>
              <img src={logo1} alt="customer logo" />
            </div>
            <div>
              <img src={logo2} alt="customer logo" />
            </div>
            <div>
              <img src={logo3} alt="customer logo" />
            </div>
            <div>
              <img src={logo4} alt="customer logo" />
            </div>
            <div>
              <img src={logo5} alt="customer logo" />
            </div>
            <div>
              <img src={logo6} alt="customer logo" />
            </div>
            <div>
              <img src={logo2} alt="customer logo" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
