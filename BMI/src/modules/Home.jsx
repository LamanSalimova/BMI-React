import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Counter from "../components/counter/Counter";
import WhyUs from "../components/whyUs/WhyUs";
import Trainings from "../components/trainings/Trainings";
import ApplyForm from "../components/applyForm/ApplyForm";
import Trainers from "../components/ourTrainers/Trainers";
import Footer from "../components/footer/Footer";
import Events from "../components/events/Events";
import News from "../components/news/News";
import OurCustomers from "../components/ourCustomers/OurCustomers";
import Partners from "../components/partners/Partners";
import Tabs from "../components/tabs/Tabs";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Counter />
      <WhyUs />
      <Trainings />
      <Trainers />
      <Events />
      <News />
      <Tabs />
      <OurCustomers />
      <Partners />
      <ApplyForm />
      <Footer />
    </div>
  );
}
