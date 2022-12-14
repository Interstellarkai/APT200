import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CarouselCard from "./CarouselCard";
import { useState } from "react";
// import Users from "../../Data/users";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ items }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [mouseEnter, setMouseEnter] = useState(false);
  const maxSteps = items.length;

  // console.log(Items[0].name);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    !mouseEnter && setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        my: 5,
        // border: "solid blue",
      }}
    >
      <div
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {items.map((item, index) => (
            <div key={item.key}>
              {Math.abs(activeStep - index) <= 2 ? (
                <CarouselCard
                  user={{ username: item.username }}
                  item={item}
                  key={item.name}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>

        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </div>
    </Box>
  );
};

export default Carousel;
