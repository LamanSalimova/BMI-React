import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";
import bmiLogo from "../../assets/images/bmiLogo.png";
import bmiLogo2 from "../../assets/images/bmilogo2.png";
import logoWhite from "../../assets/images/bmiLogo.svg";
import stickyLogo from "../../assets/images/stickyLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineSearch,
} from "react-icons/ai";
export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBox = () => {
    setIsOpen(!isOpen);
  };

  // ============Sticky Header=================
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = `navbarBottom ${isSticky ? "sticky" : ""}`;
  return (
    <header>
      <div className="headerCommon">
        <div className="container">
          <div className="navbarTop">
            <div className="navbarTopLeft">
              <Link to={ROUTES.HOME}>
                <img
                  src={bmiLogo2}
                  alt="bmi"
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    maxWidth: "350px",
                  }}
                />
              </Link>
            </div>
            <div className="navbarTopRight">
              <div className="top">
                <div className="socialLinks">
                  <Link className="socialLInkItem">
                    <FaFacebookF className="icon" size={22} />
                  </Link>
                  <Link className="socialLInkItem">
                    <AiOutlineInstagram className="icon" size={24} />
                  </Link>
                  <Link className="socialLInkItem">
                    <AiFillYoutube className="icon" size={24} />
                  </Link>
                </div>
                <div className="contact contactWithBorder">
                  <Link className="contactLink">
                    <span>
                      <MdEmail className="icon mail" size={24} />
                    </span>
                    <span>info@gmail.com</span>
                  </Link>
                </div>
                <div className="contact ">
                  <Link className="contactLink">
                    <span>
                      <BsFillTelephoneFill className="icon" size={24} />
                    </span>
                    <span>+994 50 999 99 99</span>
                  </Link>
                </div>
              </div>
              <div className="bottom">
                <div className="lang">
                  <select name="categoria">
                    <option value="az" defaultValue>
                      AZ
                    </option>
                    <option value="eng">Eng</option>
                    <option value="ru">Ru</option>
                  </select>
                </div>
                <div className="searchBox">
                  <form>
                    <input type="text" placeholder="Axtar" />
                    <button>
                      <AiOutlineSearch />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={headerClassName}>
            <div
              style={{
                display: `${isSticky ? "block" : "none"}`,
                maxWidth: "180px",
              }}
            >
              <Link to={ROUTES.HOME}>
                <img
                  src={stickyLogo}
                  alt="bmi"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </div>
            <ul className={click ? "active" : ""}>
              <li>
                <NavLink to={ROUTES.HOME} className="link">
                  Ana səhifə
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.ABOUT} className="link">
                  Haqqımızda
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.TRAİNİNGS} className="link">
                  Təlimlər
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.TRAİNERS} className="link">
                  Təlimçilər
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.NEWS} className="link">
                  Xəbərlər
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.CONTACT} className="link">
                  Bizimlə əlaqə
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="headerMobile">
        <div className="container">
          <div className={`headerMobileFlex ${isSticky ? "sticky" : ""}`}>
            <div className="mobileHeaderLeft">
              <Link to={ROUTES.HOME}>
                <img src={bmiLogo} alt="logo" />
              </Link>
            </div>
            <div className="mobileHeaderRight">
              <button onClick={toggleSearchBox}>
                <AiOutlineSearch size={28} className="icon" />
              </button>
              {isOpen && (
                <div className="searchBox">
                  <div className="container">
                    <div className="searchContainer">
                      <div className="searchForm">
                        <form>
                          <input type="text" placeholder="Axtar" />
                        </form>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <AiOutlineSearch className="icon" size={24} />
                        </button>
                      </div>
                      <button>
                        <FaTimes
                          size={30}
                          className="icon"
                          onClick={toggleSearchBox}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="hamburger" onClick={handleClick}>
                {click ? (
                  <FaTimes size={30} className="icon" />
                ) : (
                  <FaBars size={30} className="icon" />
                )}
              </div>
            </div>
          </div>
          <div className={`mobileMenu ${click ? "active" : ""}`}>
            <div className="mobileMenuHeader">
              <div className="logoBox">
                <Link to={ROUTES.HOME}>
                  <img src={logoWhite} alt="bmi" />
                </Link>
              </div>
              <div className="closeBtnBox">
                <button>
                  <FaTimes size={30} className="icon" onClick={handleClick} />
                </button>
              </div>
            </div>
            <ul>
              <li>
                <NavLink to={ROUTES.HOME} className="link">
                  Ana səhifə
                </NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.ABOUT} className="link">
                  Haqqımızda
                </NavLink>
              </li>
              <li>
                <Link to={ROUTES.TRAİNİNGS} className="link">
                  Təlimlər
                </Link>
              </li>
              <li>
                <Link to={ROUTES.TRAİNERS} className="link">
                  Təlimçilər
                </Link>
              </li>
              <li>
                <Link to={ROUTES.NEWS} className="link">
                  Xəbərlər
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="link">
                  Bizimlə əlaqə
                </Link>
              </li>
            </ul>
            <div className="bottom">
              <div className="contact contactWithBorder">
                <Link className="contactLink">
                  <span className="iconBg">
                    <BsFillTelephoneFill className="icon" size={20} />
                  </span>
                  <span>info@gmail.com</span>
                </Link>
              </div>
              <div className="contact ">
                <Link className="contactLink">
                  <span className="iconBg">
                    <MdEmail className="icon" size={20} />
                  </span>
                  <span>+994 50 999 99 99</span>
                </Link>
              </div>
              <div className="socialLinks">
                <Link className="socialLInkItem">
                  <FaFacebookF className="icon" size={22} />
                </Link>
                <Link className="socialLInkItem">
                  <AiOutlineInstagram className="icon" size={24} />
                </Link>
                <Link className="socialLInkItem">
                  <AiFillYoutube className="icon" size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`overlay ${click ? "active" : ""}`}
            onClick={() => setClick(false)}
          ></div>
        </div>
      </div>
    </header>
  );
}
