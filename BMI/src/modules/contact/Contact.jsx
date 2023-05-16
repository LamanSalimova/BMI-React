import React from "react";
import "./contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { AiOutlineRight } from "react-icons/ai";
import icon1 from "../../assets/images/tel-icon.png";
import icon2 from "../../assets/images/mailIcon.png";
import icon3 from "../../assets/images/locationIcon.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Iframe from "react-iframe";
import ApplyForm from "../../components/applyForm/ApplyForm";
export default function Contact() {
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
              <Link to={ROUTES.CONTACT} className="routerLinkItem">
                BİZİMLƏ ƏLAQƏ
              </Link>
            </div>
            <h3>BİZİMLƏ ƏLAQƏ</h3>
          </div>
          <section className="contactSection">
            <div className="container">
              <div className="flex">
                <div className="contactBox">
                  <div className="contactInfoWrapper">
                    <div className="contactInfo">
                      <div className="contactInfoItem">
                        <img src={icon1} alt="tel icon" />
                        <span>+994 55 333 45 03</span>
                      </div>
                      <div className="contactInfoItem">
                        <img src={icon2} alt="mail icon" />
                        <span>info@gmail.com</span>
                      </div>
                      <div className="contactInfoItem">
                        <img src={icon3} alt="location icon" />
                        <span>Bakı şəh.</span>
                      </div>
                    </div>
                  </div>
                  <div className="contactForm">
                    <h5>Müraciət Formu</h5>
                    <form>
                      <input type="text" placeholder="Adınız, Soyadınız*" />
                      <input type="tel" placeholder="Telefon*" />
                      <input type="email" placeholder="E-poçt*" />
                      <textarea placeholder="Mesajınız" rows={5} />

                      <div className="buttonSWrapper">
                        <input
                          type="submit"
                          className="submitBtn"
                          value="Göndər"
                        />
                        <div className="socialBtns">
                          <a href="#">
                            <FaFacebookF />
                          </a>
                          <a href="#">
                            <AiOutlineInstagram />
                          </a>
                          <a href="#">
                            <BsTwitter />
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="iframe">
                  <Iframe
                    url="https://maps.google.com/maps?q=Ziya%20B%C3%BCnyadov%20pr,%201965.%20%C3%87inar%20Park%20Biznes%20M%C9%99rk%C9%99zi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="450!important"
                    height="100%"
                    id="gmap_canvas"
                    className="mapouter iframe"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ApplyForm />
      <Footer />
    </>
  );
}
