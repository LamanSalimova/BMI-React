import React from "react";
import "./whyUs.css";
import icon5 from "../../assets/images/icons/icon5.png";
import icon6 from "../../assets/images/icons/icon6.png";
import icon7 from "../../assets/images/icons/icon7.png";
import whyUs from "../../assets/images/whyUs.jpg";
export default function WhyUs() {
  return (
    <section className="whyUsSection">
      <div className="container">
        <div className="whyUsWrapper">
          <div className="content">
            <h2>Niyə Biz?</h2>
            <p>
              EN Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cumque unde possimus, molestias pariatur necessitatibus deleniti
              repellendus eius consequuntur eligendi adipisci enim impedit, et
              est id quae ad inventore ullam tenetur iure animi dignissimos
              perferendis provident. Dignissimos excepturi recusandae nesciunt
              ratione dolores atque non soluta voluptatum, labore consequuntur
              voluptates sequi minus, sapiente ad delectus, assumenda fugiat
              cum. Architecto dolorem iste, a alias non repellat saepe deserunt
              omnis voluptatibus repudiandae blanditiis culpa eligendi illo
              error assumenda numquam inventore doloremque ipsa dolores. Aliquam
              sit amet, praesentium ex eligendi, ipsam quas sed natus atque sunt
              maxime. Obcaecati necessitatibus dignissimos provident. Autem
              dolor impedit nisi!
            </p>
            <div className="bottomInfoWrapper">
              <div className="bottomInfoItem">
                <img src={icon5} alt="icon" />
                <div className="label">
                  <span>124</span>
                  <span>Lorem1</span>
                </div>
              </div>
              <div className="bottomInfoItem">
                <img src={icon6} alt="icon" />
                <div className="label">
                  <span>496</span>
                  <span>Lorem2</span>
                </div>
              </div>
              <div className="bottomInfoItem">
                <img src={icon7} alt="icon" />
                <div className="label">
                  <span>317</span>
                  <span>Lorem3</span>
                </div>
              </div>
            </div>
          </div>
          <div className="videoWrapper">
            <img src={whyUs} />
          </div>
        </div>
      </div>
    </section>
  );
}
