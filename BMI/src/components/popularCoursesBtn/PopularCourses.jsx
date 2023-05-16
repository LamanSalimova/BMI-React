import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./popularCourses.css";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/images/courses.png";
import prImg1 from "../../assets/images/pr1.png";
import prImg2 from "../../assets/images/pr2.png";
import prImg3 from "../../assets/images/pr3.png";
import prImg4 from "../../assets/images/pr4.png";
import prImg5 from "../../assets/images/pr5.png";
import prImg6 from "../../assets/images/pr6.png";
export default function PopularCourses() {
  const coursesData = [
    {
      id: 1,
      title: "Marketing AIR",
      description: "This is the first blog item",
      image: prImg1,
    },
    {
      id: 2,
      title: "ƏMAS da praktiki iş",
      description: "This is the second blog item",
      image: prImg2,
    },
    {
      id: 3,
      title: "HR-lar üçün Excel",
      description: "This is the second blog item",
      image: prImg3,
    },
    {
      id: 4,
      title: "Sosial Media Marketinqi",
      description: "This is the second blog item",
      image: prImg4,
    },
    {
      id: 5,
      title: "Rəhbərlər üçün Strategiyanın Effektiv Planlaşdırılması və İcrası",
      description: "This is the second blog item",
      image: prImg5,
    },
    {
      id: 6,
      title: "Rəhbərlər üçün Maliyyə Təlimi",
      description: "This is the second blog item",
      image: prImg6,
    },
  ];
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    document.body.style.overflow = `${click ? "visible" : "hidden"}`;
  };
  return (
    <section className="popularCoursesSection">
      <div className="coursesBtn" onClick={handleClick}>
        <img src={logo} />
        <span>Populyar kurslar</span>
      </div>
      <div className={`courseBody ${click ? "active" : ""}`}>
        <div className="courseHeader">
          <h4>Populyar kurslar</h4>
          <div className="closeBtnBox">
            <button>
              <FaTimes size={30} className="icon" onClick={handleClick} />
            </button>
          </div>
        </div>
        <div className="coursesList">
          {coursesData.map((courseItem) => {
            return (
              <Link
                key={courseItem.id}
                to={`/coursesDetails/${courseItem.id}`}
                className="link"
              >
                <div className="courseItem">
                  <img src={courseItem.image} alt={courseItem.title} />
                  <h3>{courseItem.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={`overlay ${click ? "active" : ""}`}
        onClick={() => setClick(false)}
      ></div>
    </section>
  );
}
