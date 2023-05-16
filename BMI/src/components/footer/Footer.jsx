import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";
import ApplyBtn from "../applyBtn/ApplyBtn";
import PopularCourses from "../popularCoursesBtn/PopularCourses";
import { ROUTES } from "../../routes";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <section className="footer">
      <footer>
        <div className="container">
          <div className="footerWrapper">
            <div className="footerLogo">
              <img src={logo} />
            </div>
            <div className="menues">
              <h4>Menyular</h4>
              <ul>
                <li>
                  <Link to={ROUTES.ABOUT} className="footerLink">
                    Haqqımızda
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.TRAİNİNGS} className="footerLink">
                    Təlimlər
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.TRAİNERS} className="footerLink">
                    Təlimçilər
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.NEWS} className="footerLink">
                    Xəbərlər
                  </Link>
                </li>
              </ul>
            </div>
            <div className="links">
              <h4>Faydalı linklər</h4>
              <ul>
                <li>
                  <Link to="#" className="footerLink">
                    Tez-tez soruşulanlar
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footerLink">
                    Karyera
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footerLink">
                    Xidmət şəbəkəsi
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h4>Əlaqə</h4>
              <ul>
                <li>
                  <Link to="#" className="footerLink">
                    info@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="#" className="footerLink">
                    055 999 99 99
                  </Link>
                </li>
              </ul>
              <div className="footerLinkIcons">
                <a href="#">
                  <FaFacebookF size={18} />
                </a>
                <a href="#">
                  <FaTwitter size={18} />
                </a>
                <a href="#">
                  <AiOutlineInstagram size={18} />
                </a>
                <a href="#">
                  <AiFillYoutube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>&#169; 2023. Business Management İnstitute.</p>
        </div>
      </footer>
      <div
        onClick={handleClick}
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: isVisible ? "1" : "0",
          position: "fixed",
          right: "30px",
          bottom: "40px",
          background: "#3d54a1",
          color: "#FFFFFF",
          cursor: "pointer",
          boxShadow: "0 0 10px #fff",
          borderRadius: "5px",
          fontSize: "20px",
          animation: "upToBtn 1s ease forwards", //don't animate!!!!!
          transition: "0.5s",
        }}
      >
        <AiOutlineArrowUp />
      </div>
      <ApplyBtn />
      <PopularCourses />
    </section>
  );
}
