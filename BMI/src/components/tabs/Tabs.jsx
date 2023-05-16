import React, { useState } from "react";
import "./tabs.css";
import img1 from "../../assets/images/photo1.png";
import img2 from "../../assets/images/photo2.png";
import img3 from "../../assets/images/photo3.png";
import img4 from "../../assets/images/event1.png";
import img5 from "../../assets/images/event2.png";
import img6 from "../../assets/images/event3.png";
import img7 from "../../assets/images/event4.png";
import img8 from "../../assets/images/event5.png";
import { BsFillPlayFill } from "react-icons/bs";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("photos");
  const photosData = [
    {
      id: 1,
      image: img1,
      eventTitle: "FOTO 1",
    },
    {
      id: 2,
      image: img2,
      eventTitle: "FOTO 2",
    },
    {
      id: 3,
      image: img3,
      eventTitle: "FOTO 3",
    },
    {
      id: 4,
      image: img4,
      eventTitle: "FOTO 4",
    },
    {
      id: 5,
      image: img5,
      eventTitle: "FOTO 5",
    },
    {
      id: 6,
      image: img6,
      eventTitle: "FOTO 6",
    },
  ];
  const videosData = [
    {
      id: 1,
      image: img7,
    },
    {
      id: 2,
      image: img8,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
  ];
  return (
    <div className="tabsSection">
      <div className="container">
        <div className="tabsSectionHeader">
          <span className="line"></span>
          <h4>TƏLİM VƏ TƏDBİRLƏRİMİZDƏN</h4>
          <span className="line"></span>
        </div>
        <div className="tabsHead">
          <button
            onClick={() => setActiveTab("photos")}
            className="photosBtn"
            style={{
              backgroundColor: activeTab === "photos" ? "#202f3f" : "white",
              color: activeTab === "photos" ? "#fff" : "",
            }}
          >
            Fotolar
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className="videosBtn"
            style={{
              backgroundColor: activeTab === "videos" ? "#202f3f" : "white",
              color: activeTab === "videos" ? "#fff" : "",
            }}
          >
            Videolar
          </button>
        </div>
        {activeTab === "photos" && (
          <div className="photosGrid">
            {photosData.map((item) => {
              return (
                <div
                  className="photoItem"
                  style={{
                    background: `url(${item.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  key={item.id}
                >
                  <div className="overlayText">
                    <a href="#">{item.eventTitle}</a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {activeTab === "videos" && (
          <div className="videoSection">
            <div className="videoGrid">
              {videosData.map((videoItem) => {
                return (
                  <div
                    className="videoItem"
                    style={{
                      background: `url(${videoItem.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    key={videoItem.id}
                  >
                    <div className="overlayText">
                      <a href="#">
                        <BsFillPlayFill className="playIcon" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
