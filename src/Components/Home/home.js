import React from "react";
import { Carousel } from "react-responsive-carousel";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import "./style.scss";

export default function Home() {
  return (
    <>
      <Carousel
        infiniteLoop
        showThumbs={false}
        renderArrowPrev={() => {}}
        renderArrowNext={() => {}}
        showStatus={false}
        autoPlay
      >
        <div className="Carousel-div">
          <div>
            <p>Learn from the best of industry</p>
            <h1>Highest in quality, affordable in price</h1>
            <p>
              Digital entrepreneurs, Youtubers and content creators provide
              affordable courses across technologies.
            </p>
          </div>
          <img src={c1} alt="" />
        </div>
        <div className="Carousel-div">
          <div>
            <p>Learn from the best of industry</p>
            <h1>Highest in quality, affordable in price</h1>
            <p>
              Digital entrepreneurs, Youtubers and content creators provide
              affordable courses across technologies.
            </p>
          </div>
          <img src={c2} alt="" />
        </div>
        <div className="Carousel-div">
          <div>
            <p>Learn from the best of industry</p>
            <h1>Highest in quality, affordable in price</h1>
            <p>
              Digital entrepreneurs, Youtubers and content creators provide
              affordable courses across technologies.
            </p>
          </div>
          <img src={c3} alt="" />
        </div>
      </Carousel>
    </>
  );
}
