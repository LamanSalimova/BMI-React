import React from "react";
import "./events.css";
import eventImg1 from "../../assets/images/event1.png";
import eventImg2 from "../../assets/images/event2.png";
import eventImg3 from "../../assets/images/event3.png";
import eventImg4 from "../../assets/images/event4.png";
import eventImg5 from "../../assets/images/event5.png";
import eventImg6 from "../../assets/images/event6.png";
export default function Events() {
  const eventsData = [
    {
      id: 1,
      image: eventImg1,
      eventTitle: "Tədbir 1",
      trInfo: "SOCAR / İnsan Resursları üzrə aparıcı mütəxəssis",
    },
    {
      id: 2,
      image: eventImg2,
      eventTitle: "Tədbir 2",
      trInfo: "Paşa Sığorta / Təlim və inkişaf şöbəsinin rəhbəri",
    },
    {
      id: 3,
      image: eventImg3,
      eventTitle: "Tədbir 3",
      trInfo: "Fil Agency / Şirkətin təsisçisi, baş direktor",
    },
    {
      id: 4,
      image: eventImg4,
      eventTitle: "Tədbir 4",
      trInfo: "Baker Tilly Audit Azərbaycan / HR Direktor",
    },
    {
      id: 5,
      image: eventImg5,
      eventTitle: "Tədbir 5",
      trInfo: "Təlimçi və biznes-məsləhətçi",
    },
    {
      id: 6,
      image: eventImg6,
      eventTitle: "Tədbir 6",
      trInfo: "Business Management School / İnsan Resursları üzrə menecer",
    },
  ];
  return (
    <section className="eventsSection">
      <div className="container">
        <div className="eventsWrapper">
          <div className="flex">
            <div className="eventsHeader">
              <span className="line"></span>
              <h4>TƏŞKİLATÇISI VƏ TƏŞKİLATİ DƏSTƏKÇİSİ OLDUĞUMUZ TƏDBİRLƏR</h4>
              <span className="line"></span>
            </div>
          </div>

          <div className="eventsGrid">
            {eventsData.map((event) => {
              return (
                <div
                  className="event"
                  style={{
                    background: `url(${event.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  key={event.id}
                >
                  <div className="overlayText">
                    <a href="#">{event.eventTitle}</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
