import React from "react";
import "./style.scss";
import { data } from "./data";
import Carousel from "react-multi-carousel";
import { responsive } from "../HallOfFame";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Avengers() {
  return (
    <div className="Avengers-container">
      <h1 className="Avengers-heading">Tech Avengers</h1>
      <Carousel
        className="Avengers-Carousel"
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
          return <AvengersCard data={d} key={i} />;
        })}
      </Carousel>
    </div>
  );
}

function AvengersCard({ data }) {
  return (
    <>
      <div className="Avengers-card">
        <div className="Avengers-card-header">
          <div
            style={{
              backgroundImage: `url(${data.img})`,
            }}
            className="Avengers-image"
          ></div>

          <div className="Avengers-info">
            <h3 className="Avengers-name">{data.name}</h3>
            <p className="Avengers-desc">{data.title}</p>
          </div>
        </div>

        <div className="Avengers-card-body">
          <div className="Avengers-action">
            {data.linkedin && (
              <LinkedInIcon fontSize="large" style={{ color: "#0288D1" }} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
