import React from "react";
import { Slide } from "react-reveal";
import github from "../../alumni-comp-images/github.png";
import jetbraines from "../../alumni-comp-images/jetbrains.png";
import geekyants from "../../alumni-comp-images/geekyants.png";
import learnyst from "../../alumni-comp-images/learnyst.png";
import musigma from "../../alumni-comp-images/musigma.png";
import nvidia from "../../alumni-comp-images/nvidia.png";
import redis from "../../alumni-comp-images/redis.png";
import "./style.scss";

export default function Hackathon() {
  return (
    <div className="Hackathon-container">
      <div className="custom-shape-divider-bottom-1659599804">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Slide bottom>
        <h1 className="Hackathon-Heading">Hackathon Companies</h1>
      </Slide>
      <div className="Hackathon-images">
        <Slide left>
          <img src={github} alt="" />
        </Slide>
        <Slide left>
          <img src={jetbraines} alt="" />
        </Slide>
        <Slide left>
          <img src={geekyants} alt="" />
        </Slide>
        <Slide bottom>
          <img src={learnyst} alt="" />
        </Slide>
        <Slide right>
          <img src={musigma} alt="" />
        </Slide>
        <Slide right>
          <img src={nvidia} alt="" />
        </Slide>
        <Slide right>
          <img src={redis} alt="" />
        </Slide>
      </div>
    </div>
  );
}
