import React from "react";
import "./trainingsPage.css";
import Header from "../../components/header/Header";
import { ROUTES } from "../../routes";
import Footer from "../../components/footer/Footer";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Trainings from "../../components/trainings/Trainings";
import Tabs from "../../components/tabs/Tabs";
import ApplyForm from "../../components/applyForm/ApplyForm";
export default function TrainingsPage() {
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
              <Link className="routerLinkItem">Təlimlər</Link>
            </div>
            <h3>TƏLİMLƏR</h3>
          </div>
        </div>
        <Trainings />
        <Tabs />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
