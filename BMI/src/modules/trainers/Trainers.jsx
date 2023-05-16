import React from "react";
import "./trainers.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { AiOutlineRight } from "react-icons/ai";
import img1 from "../../assets/images/tr1.jpg";
import img2 from "../../assets/images/tr2.jpg";
import img3 from "../../assets/images/tr3.jpg";
import img4 from "../../assets/images/tr4.jpg";
import img5 from "../../assets/images/tr5.jpg";
import img6 from "../../assets/images/tr6.jpg";
import img7 from "../../assets/images/tr7.jpg";
import img8 from "../../assets/images/tr8.jpg";
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
    {
      id: 6,
      image: img6,
      trTitle: "Teymur İslamlı",
      trInfo: "Good Finance MMC / vergilər üzrə menecer",
    },
    {
      id: 7,
      image: img7,
      trTitle: "Elmi Qurbanlı",
      trInfo:
        "AzerGold QSC / İnsan Resursları şöbəsi Təşkilati İnkişaf sektoru aparıcı mütəxəssis",
    },
    {
      id: 8,
      image: img8,
      trTitle: "Ayşən Cabay",
      trInfo: "Business Management School / İnsan Resursları üzrə menecer",
    },
  ];
  return (
    <>
      <Header />
      <section className="trainersSection">
        <div className="container">
          <div className="pageHeader">
            <div className="rootLinks">
              <Link to={ROUTES.HOME} className="routerLinkItem">
                Ana səhifə
              </Link>
              <AiOutlineRight className="chevronRight" />
              <Link to={ROUTES.TRAİNERS} className="routerLinkItem">
                Təlimçilər
              </Link>
            </div>
            <h3>TƏLİMÇİLƏR</h3>
          </div>
          <div className="trainersGrid">
            {trainersData.map((trainer) => (
              <div className="trainerCard" key={trainer.id}>
                <div className="trainerImgWrapper">
                  <img src={trainer.image} alt={trainer.trTitle} />
                </div>
                <div className="trainerContent">
                  <h5>{trainer.trTitle}</h5>
                  <span>Təlimçi {trainer.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
