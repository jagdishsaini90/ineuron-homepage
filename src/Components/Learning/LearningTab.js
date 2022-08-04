import React from "react";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import course1 from "../../images/course1.jpg";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Carousel from "react-multi-carousel";
import { responsive } from "../HallOfFame";
import { Slide } from "react-reveal";
import "./style.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="learning-tabpanel"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function LearningTab({ value }) {
  const theme = useTheme();
  const data = [0, 1, 2, 3, 4];
  return (
    <>
      <TabPanel value={value} index={value} dir={theme.direction}>
        <Slide bottom>
          <h1>Live Programs</h1>
        </Slide>
        <Slide bottom>
          <p>Get your program with live "instructor led" learning.</p>
        </Slide>
        <Carousel
          className="learningTab-carousel"
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
            return <LearningPanelCard key={i} />;
          })}
        </Carousel>
      </TabPanel>
    </>
  );
}

function LearningPanelCard() {
  return (
    <>
      <div className="LearningPanelCard-card">
        <img src={course1} alt="" />
        <h1>Full Stack Data Science BootCamp 2.0</h1>
        <p>Kris Naik</p>
        <div>
          <span>
            <CurrencyRupeeIcon />
            4000
          </span>
          <Button variant="contained">Live</Button>
        </div>
      </div>
    </>
  );
}
