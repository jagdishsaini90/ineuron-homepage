import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Slide } from "react-reveal";
import { data } from "./data";
import "./style.scss";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function HallOFFame() {
  return (
    <>
      <section id="hallofFameSection" className="HallOFFame-container">
        <Slide bottom>
          <h1 className="HallOFFame-heading">Hall of Fame</h1>
        </Slide>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay
          customTransition="all 2s ease-in-out"
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {data.map((d, i) => {
            return <HallOFFameCard data={d} key={i} />;
          })}
        </Carousel>
        <p className="HallOFFame-viewmore">View More</p>
      </section>
    </>
  );
}

function HallOFFameCard({ data }) {
  const [iconclassName, setIconclassName] = useState("");
  const cardRef = useRef();
  const iconRef = useRef();
  const handleClick = () => {
    setIconclassName(() => "fa-spin-fast");

    if (cardRef.current.classList.contains("mc-active")) {
      cardRef.current.classList.remove("mc-active");

      setTimeout(function () {
        iconRef.current.classList.remove("fa-arrow-left");
        iconRef.current.classList.remove("fa-spin-fast");
        iconRef.current.classList.add("fa-bars");
      }, 800);
    } else {
      cardRef.current.classList.add("mc-active");

      setTimeout(function () {
        iconRef.current.classList.remove("fa-bars");
        iconRef.current.classList.remove("fa-spin-fast");
        iconRef.current.classList.add("fa-arrow-left");
      }, 800);

      setTimeout(() => {
        cardRef.current.classList.remove("mc-active");
      }, 5000);
    }
  };

  return (
    <>
      <div className="HallOFFame-card">
        <article ref={cardRef} className="material-card Red">
          <p className="HallOFFameCard-h2">
            <span>{data.name}</span>
            <strong>
              <i ref={iconRef} className="fa fa-fw fa-star"></i>
              {data.title}
            </strong>
          </p>
          <div className="mc-content">
            <div className="img-container">
              <img className="img-responsive" src={data.img} alt="" />
            </div>
            <div className="mc-description">{data.desc}</div>
          </div>
          <a href="#!" onClick={handleClick} className="mc-btn-action">
            <MenuIcon className={`${iconclassName && iconclassName}`} />
          </a>
          <div className="mc-footer">
            <h4 className="HallOFFameCard-h4">Social</h4>
            <a href={data.linkedin}>
              <LinkedInIcon fontSize={"large"} />
            </a>
            <a href={data.linkedin}>
              <FacebookIcon fontSize={"large"} />
            </a>
            <a href={data.linkedin}>
              <LinkedInIcon fontSize={"large"} />
            </a>
            <a href={data.linkedin}>
              <FacebookIcon fontSize={"large"} />
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
