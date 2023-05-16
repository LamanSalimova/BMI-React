import React from "react";
import "./trainings.css";
import training1 from "../../assets/images/trainings/training1.png";
import training2 from "../../assets/images/trainings/training2.png";
import training3 from "../../assets/images/trainings/training3.jpg";
import training4 from "../../assets/images/trainings/training4.png";
import training5 from "../../assets/images/trainings/training7.png";
import training6 from "../../assets/images/trainings/training8.png";
import training7 from "../../assets/images/trainings/training12.png";
import online from "../../assets/images/online.png";
import offline from "../../assets/images/offline.png";
export default function Trainings() {
  const trainingsData = [
    {
      id: 1,
      onOff: "offline",
      onOffIcon: offline,
      title: "Rəhbərlər üçün təlimlər",
      info: "Rəhbərlər üçün Maliyyə",
      trainingBg: training1,
    },
    {
      id: 2,
      onOff: "online",
      onOffIcon: online,

      title: "Marketinq təlimləri",
      info: "Alt kateqoriya",
      trainingBg: training2,
    },
    {
      id: 3,
      onOff: "offline",
      onOffIcon: offline,

      title: "İnsan Resurslarının İdarə edilməsi təlimləri",
      info: "Alt kateqoriya",
      trainingBg: training3,
    },
    {
      id: 4,
      onOff: "online",
      onOffIcon: online,

      title: "Təlim 4",
      info: "Rəhbərlər üçün Maliyyə",
      trainingBg: training4,
    },
    {
      id: 5,
      onOff: "online",
      onOffIcon: online,

      title: "Marketinq təlimləri",
      info: "Alt kateqoriya",
      trainingBg: training5,
    },
    {
      id: 6,
      onOff: "offline",
      onOffIcon: offline,

      title: "Rəhbərlər üçün təlimlər",
      info: "Rəhbərlər üçün Maliyyə",
      trainingBg: training6,
    },
    {
      id: 7,
      onOff: "online",
      onOffIcon: online,

      title: "Təlim",
      info: "Alt kateqoriya",
      trainingBg: training7,
    },
    {
      id: 8,
      onOff: " offline",
      onOffIcon: offline,

      title: "İnsan Resurslarının İdarə edilməsi təlimləri",
      info: "Alt kateqoriya",
      trainingBg: training3,
    },
  ];
  return (
    <section className="trainingsSection">
      <div className="trainingsHeader">
        <span className="line"></span>
        <h4>TƏLİMLƏR</h4>
        <span className="line"></span>
      </div>
      <div className="generalTrainings">
        <div className="container">
          <div className="trainingsWrapper">
            {trainingsData.map((item, index) => {
              return (
                <div
                  className="trainingItem"
                  style={{
                    background: `linear-gradient(to bottom, #000000A8, #000000A8),url(${item.trainingBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                  key={index}
                >
                  <div
                    className="onOff"
                    style={{
                      backgroundColor:
                        item.onOff === "offline" ? "#db353a" : "#3d54a1",
                    }}
                  >
                    <img src={item.onOffIcon} />
                    <span>{item.onOff}</span>
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.info}</p>
                  <a href="#">Ətraflı</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
