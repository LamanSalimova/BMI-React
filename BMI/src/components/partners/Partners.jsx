import React from "react";
import "./partners.css";
import logo1 from "../../assets/images/partner1.png";
import logo2 from "../../assets/images/partner2.png";
import logo3 from "../../assets/images/partner3.png";
import logo4 from "../../assets/images/partner4.png";
import logo5 from "../../assets/images/partner5.png";
import logo6 from "../../assets/images/partner6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Partners() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    <section className="partnersSection">
      <div className="container">
        <div className="partnersHeader">
          <span className="line"></span>
          <h4>PARTNYORLARIMIZ</h4>
          <span className="line"></span>
        </div>
        <div className="partnerSlide">
          <Slider {...settings} className="slider">
            <div>
              <img src={logo1} alt="partner logo" />
            </div>
            <div>
              <img src={logo2} alt="partner logo" />
            </div>
            <div>
              <img src={logo3} alt="partner logo" />
            </div>
            <div>
              <img src={logo4} alt="partner logo" />
            </div>
            <div>
              <img src={logo5} alt="partner logo" />
            </div>
            <div>
              <img src={logo6} alt="partner logo" />
            </div>
            <div>
              <img src={logo2} alt="partner logo" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
