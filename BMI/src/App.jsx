import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "./modules/Home";
import About from "./modules/about/About";
import News from "./modules/news/News";
import Contact from "./modules/contact/Contact";
import PopularCourses from "./components/popularCoursesBtn/PopularCourses";
import CoursesDetails from "./components/popularCoursesBtn/courseDetails/CoursesDetails";
import TrainingsPage from "./modules/trainings/TrainingsPage";
import NewsDetails from "./modules/news/newsDetails/NewsDetails";
import Trainers from "./modules/trainers/Trainers";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} exact />
        <Route path={ROUTES.ABOUT} element={<About />} exact />
        <Route path={ROUTES.TRAİNİNGS} element={<TrainingsPage />} exact />
        <Route path={ROUTES.TRAİNERS} element={<Trainers />} exact />
        <Route path={ROUTES.NEWS} element={<News />} exact />
        <Route path={ROUTES.NEWSDETAILS} element={<NewsDetails />} exact />
        <Route path={ROUTES.CONTACT} element={<Contact />} exact />
        <Route
          path={ROUTES.POPULARCOURSES}
          element={<PopularCourses />}
          exact
        />
        <Route
          path={ROUTES.COURSESDETAILS}
          element={<CoursesDetails />}
          exact
        />
      </Routes>
    </BrowserRouter>
  );
}
