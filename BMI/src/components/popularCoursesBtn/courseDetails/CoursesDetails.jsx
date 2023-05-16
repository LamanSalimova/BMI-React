import React from "react";
import "./coursesDetails.css";
import { Link, useParams } from "react-router-dom";
import prImg1 from "../../../assets/images/pr1.png";
import prImg2 from "../../../assets/images/pr2.png";
import prImg3 from "../../../assets/images/pr3.png";
import prImg4 from "../../../assets/images/pr4.png";
import prImg5 from "../../../assets/images/pr5.png";
import prImg6 from "../../../assets/images/pr6.png";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { ROUTES } from "../../../routes";
import { AiOutlineRight } from "react-icons/ai";
import online from "../../../assets/images/online.png";
import offline from "../../../assets/images/offline.png";
import Accordion from "../accordion/Accordion";
export default function CoursesDetails() {
  const coursesData = [
    {
      id: 1,
      title: "Marketing AIR",
      description: "This is the first blog item",
      image: prImg1,
      onOff: "offline",
      onOffIcon: offline,
    },
    {
      id: 2,
      title: "ƏMAS da praktiki iş",
      description: "This is the second blog item",
      image: prImg2,
      onOff: "online",
      onOffIcon: online,
    },
    {
      id: 3,
      title: "HR-lar üçün Excel",
      description: "This is the second blog item",
      image: prImg3,
      onOff: "offline",
      onOffIcon: offline,
    },
    {
      id: 4,
      title: "Sosial Media Marketinqi",
      description: "This is the second blog item",
      image: prImg4,
      onOff: "offline",
      onOffIcon: offline,
    },
    {
      id: 5,
      title: "Rəhbərlər üçün Strategiyanın Effektiv Planlaşdırılması və İcrası",
      description: "This is the second blog item",
      image: prImg5,
      onOff: "online",
      onOffIcon: online,
    },
    {
      id: 6,
      title: "Rəhbərlər üçün Maliyyə Təlimi",
      description: "This is the second blog item",
      image: prImg6,
      onOff: "offline",
      onOffIcon: offline,
    },
  ];
  const accordionData = [
    {
      title: "Ümumi Məlumat:",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry’s standard dummy text ever since the  1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book. It has survived not only five centuries, but also  the leap into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum  passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.",
    },
    {
      title: "Təlim kimlər üçün nəzərdə tutulmuşdur:",
      content:
        "- Lorem Ipsum is simply dummy text of the printing and typesetting industry.  - Aldus PageMaker  including versions of Lorem Ipsum.",
    },
    {
      title: "Təlimlərdə iştirak sizə nə qazandıracaq?",
      content:
        " - Lorem Ipsum is simply dummy text of the printing and typesetting industry.  - Aldus PageMaker  including versions of Lorem Ipsum.- It was  popularised in the 1960s with the release of Letraset - When an unknown printer took a galley of type and scrambled ",
    },
  ];

  const { id } = useParams();
  const selectedBlogItem = coursesData.find((item) => item.id === Number(id));
  return (
    <section className="courseDetailsSection">
      <Header />
      <div className="container">
        <div className="pageHeader">
          <div className="rootLinks">
            <Link to={ROUTES.HOME} className="routerLinkItem">
              Ana səhifə
            </Link>
            <AiOutlineRight className="chevronRight" />
            <Link to={ROUTES.TRAİNİNGS} className="routerLinkItem">
              TƏLİM İSTİQAMƏTLƏRİ
            </Link>
            <AiOutlineRight className="chevronRight" />
            <Link to={ROUTES.NEWS} className="routerLinkItem">
              {selectedBlogItem.title}
            </Link>
          </div>
        </div>
        <div>
          <h2>{selectedBlogItem.title}</h2>
          <div className="bannerImgWrapper">
            <img src={selectedBlogItem.image} alt={selectedBlogItem.title} />
          </div>
          <div className="detailHeader">
            <h2>{selectedBlogItem.title}</h2>
            <div
              className="onOff"
              style={{
                backgroundColor:
                  selectedBlogItem.onOff === "offline" ? "#db353a" : "#3d54a1",
              }}
            >
              <img src={selectedBlogItem.onOffIcon} />
              <span>{selectedBlogItem.onOff}</span>
            </div>
          </div>
          {accordionData.map((accordion, index) => (
            <Accordion
              key={index}
              title={accordion.title}
              content={accordion.content}
            />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
}
