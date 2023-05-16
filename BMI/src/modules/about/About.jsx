import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { AiOutlineRight } from "react-icons/ai";
import Counter from "../../components/counter/Counter";
import WhyUs from "../../components/whyUs/WhyUs";
import Tabs from "../../components/tabs/Tabs";
import OurCustomers from "../../components/ourCustomers/OurCustomers";
import Partners from "../../components/partners/Partners";

export default function About() {
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
                HAQQIMIZDA
              </Link>
            </div>
            <h3>HAQQIMIZDA</h3>
          </div>
        </div>
        <WhyUs />
        <Counter />
        <Tabs />
        <OurCustomers />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
