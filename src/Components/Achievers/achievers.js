import React from "react";
import affine from "../../alumni-comp-images/affine.png";
import boeing from "../../alumni-comp-images/boeing.png";
import eminds from "../../alumni-comp-images/eminds.png";
import geekyants from "../../alumni-comp-images/geekyants.png";
import innova from "../../alumni-comp-images/innova.png";
import greendeck from "../../alumni-comp-images/greendeck.png";
import kpmg from "../../alumni-comp-images/kpmg.png";
import learnyst from "../../alumni-comp-images/learnyst.png";
import leventm from "../../alumni-comp-images/leventm.png";
import livspace from "../../alumni-comp-images/livspace.png";
import mindtree from "../../alumni-comp-images/mindtree.png";
import musigma from "../../alumni-comp-images/musigma.png";
import odessa from "../../alumni-comp-images/odessa.png";
import redbus from "../../alumni-comp-images/redbus.png";
import robosoft from "../../alumni-comp-images/robosoft.png";
import tataiq from "../../alumni-comp-images/tataiq.png";
import thoughtworks from "../../alumni-comp-images/thoughtworks.png";
import wellnesys from "../../alumni-comp-images/wellnesys.png";
import wipro from "../../alumni-comp-images/wipro.png";
import wissen from "../../alumni-comp-images/wissen.png";
import zensar from "../../alumni-comp-images/zensar.png";
import freshworks from "../../alumni-comp-images/freshworks.png";
import bunBradstreet from "../../alumni-comp-images/bunBradstreet.png";
import { Slide } from "react-reveal";
import "./style.scss";

export default function Achievers() {
  return (
    <div className="achievers">
      <div className="custom-shape-divider-bottom-1659184438">
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

      <h1>Our Achiever’s Work with</h1>
      <div className="achievers-images">
        <Slide left>
          <img src={affine} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={geekyants} className="App-logo" alt="logo" />
        </Slide>
        <Slide bottom>
          <img src={eminds} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={boeing} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={innova} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={greendeck} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={kpmg} className="App-logo" alt="logo" />
        </Slide>
        <Slide bottom>
          <img src={learnyst} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={leventm} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={livspace} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={mindtree} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={robosoft} className="App-logo" alt="logo" />
        </Slide>
        <Slide bottom>
          <img src={redbus} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={odessa} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={musigma} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={tataiq} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={thoughtworks} className="App-logo" alt="logo" />
        </Slide>
        <Slide bottom>
          <img src={wellnesys} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={wipro} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <img src={wissen} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={zensar} className="App-logo" alt="logo" />
        </Slide>
        <Slide left>
          <img src={freshworks} className="App-logo" alt="logo" />
        </Slide>
        <Slide bottom>
          <img src={bunBradstreet} className="App-logo" alt="logo" />
        </Slide>
        <Slide right>
          <h2 className="achievers-many-more">many more...</h2>
        </Slide>
      </div>
    </div>
  );
}
