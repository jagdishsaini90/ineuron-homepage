import React from "react";
import { Slide } from "react-reveal";
import logo1 from "../../images/logo1.jpg";
import logo2 from "../../images/logo2.jpg";
import logo3 from "../../images/logo3.jpg";
import CountUp from "react-countup";
import "./style.scss";

export default function PurehardWork() {
  return (
    <div className="PurehardWork">
      <Slide bottom>
        <h1>"Pure HardWork, No Shortcut"</h1>
      </Slide>
      <div className="PurehardWork-row">
        <Slide left>
          <div>
            <img src={logo1} alt="" />
            <CountUp
              enableScrollSpy={true}
              suffix="+"
              start={0}
              end={400}
              delay={0}
            >
              {({ countUpRef }) => <h1 ref={countUpRef}>400+</h1>}
            </CountUp>
            <h1>Different Courses</h1>
          </div>
        </Slide>
        <Slide bottom>
          <div>
            <img src={logo2} alt="" />
            <CountUp
              enableScrollSpy={true}
              suffix="+"
              start={0}
              end={400000}
              delay={0}
            >
              {({ countUpRef }) => <h1 ref={countUpRef}>400000+</h1>}
            </CountUp>
            <h1>Students Enrolled</h1>
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={logo3} alt="" />
            <CountUp
              enableScrollSpy={true}
              suffix="+"
              start={0}
              end={10000}
              delay={0}
            >
              {({ countUpRef }) => <h1 ref={countUpRef}>10000+</h1>}
            </CountUp>
            <h1>Successful Transition</h1>
          </div>
        </Slide>
      </div>
    </div>
  );
}
