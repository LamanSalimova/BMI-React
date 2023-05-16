import React, { useState } from "react";
import "./counter.css";
import icon from "../../assets/images/icons/icon1.png";
import icon2 from "../../assets/images/icons/icon2.png";
import icon3 from "../../assets/images/icons/icon3.png";
import icon4 from "../../assets/images/icons/icon4.png";
import icon5 from "../../assets/images/icons/icon5.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function Counter() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <section className="counterSection">
        <div className="container">
          <div className="counterWrapper">
            <div className="counterItem">
              <div className="imgWrapper">
                <img src={icon} alt="icon" />
              </div>
              <div className="counterItemTitle">
                <p>Təşkilati dəstək olduğumuz form sayı</p>
              </div>

              <span className="countUp">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={455}
                    duration={2}
                    delay={0}
                    className="countUp"
                  />
                )}
                +
              </span>
            </div>
            <div className="counterItem">
              <div className="imgWrapper">
                <img src={icon2} alt="icon" />
              </div>
              <div className="counterItemTitle">
                <p>Təşkil edilmiş forum sayı</p>
              </div>
              <span className="countUp">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={3}
                    duration={2}
                    delay={0}
                    className="countUp"
                  />
                )}
                +
              </span>
            </div>
            <div className="counterItem">
              <div className="imgWrapper">
                <img src={icon3} alt="icon" />
              </div>
              <div className="counterItemTitle">
                <p>Məzun sayı</p>
              </div>
              <span className="countUp">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={7000}
                    duration={2}
                    delay={0}
                    className="countUp"
                  />
                )}
                +
              </span>
            </div>
            <div className="counterItem">
              <div className="imgWrapper">
                <img src={icon4} alt="icon" />
              </div>
              <div className="counterItemTitle">
                <p>Korperativ təlim sayı</p>
              </div>
              <span className="countUp">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={40}
                    duration={2}
                    delay={0}
                    className="countUp"
                  />
                )}
                +
              </span>
            </div>
            <div className="counterItem">
              <div className="imgWrapper">
                <img src={icon5} alt="icon" />
              </div>
              <div className="counterItemTitle">
                <p>Keçirilmiş təlim sayı</p>
              </div>
              <span className="countUp">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={500}
                    duration={2}
                    delay={0}
                    className="countUp"
                  />
                )}
                +
              </span>
            </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>
  );
}
