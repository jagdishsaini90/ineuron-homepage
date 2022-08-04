import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { Slide } from "react-reveal";
import "./style.scss";
import LearningTab from "./LearningTab";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Learning() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Box className="learning-container">
        <Slide bottom>
          <h1 className="learning-heading">What you will learn</h1>
        </Slide>
        <AppBar className="learning-appbar" position="static">
          <Slide bottom>
            <Tabs value={value} onChange={handleChange} variant="fullWidth">
              <Tab
                className="learning-tab"
                label="Live Programs"
                {...a11yProps(0)}
              />
              <Tab
                className="learning-tab"
                label="Affordable Programs"
                {...a11yProps(1)}
              />
              <Tab
                className="learning-tab"
                label="Community Programs"
                {...a11yProps(2)}
              />
              <Tab
                className="learning-tab"
                label="One Neuron"
                {...a11yProps(3)}
              />
              <Tab
                className="learning-tab"
                label="Test Series"
                {...a11yProps(4)}
              />
            </Tabs>
          </Slide>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <LearningTab value={0} />
          <LearningTab value={1} />
          <LearningTab value={2} />
          <LearningTab value={3} />
          <LearningTab value={4} />
        </SwipeableViews>
      </Box>
    </>
  );
}
