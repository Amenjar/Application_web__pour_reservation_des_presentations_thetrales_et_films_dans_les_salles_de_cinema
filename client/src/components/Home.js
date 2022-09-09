import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { getpublication } from "../redux/actions/pubAction";
import { useDispatch, useSelector } from "react-redux";

import CardPubHome from "./Publication/CardPubHome";
import Footer from "./Footer";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://cdn.radiofrance.fr/s3/cruiser-production/2019/11/f820d3da-3a08-4907-8c37-6a8081b351e7/801x410_joker_2.jpg",
  },
  {
    imgPath:
      "https://attayma.com/wp-content/uploads/2021/10/Sans-titre-1-7-735x400.jpg",
  },
  {
    imgPath:
      "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2021-12/jtc%20journ%C3%A9es%20th%C3%A9atrales%20de%20carthage%20du%204%20AU%2012%20DEEMBRE.jpg?itok=BOjASTL3",
  },
  {
    imgPath:
      "https://2.bp.blogspot.com/-yTcziAZNIFU/WLFVxaYqkqI/AAAAAAAA_30/joqQiecJB-IiQir72cZd-FoitcI-r4QxgCLcB/s1600/11392937_840787939290773_2259791567899373048_n.jpg",
  },
];

function Home({ search }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getpublication());
  }, [dispatch]);
  const publications = useSelector((state) => state.PubReducer.publications);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <Box sx={{ maxWidth: 1567, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 550,
                    display: "block",
                    maxWidth: 1000,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                  style={{ marginLeft: "250px" }}
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
              Next
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
              Back
            </Button>
          }
        />
      </Box>
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "19px" }}>
        {publications &&
          publications
            .filter(
              (el) =>
                parseInt(el.rate) >= 4 &&
                el.title.toUpperCase().includes(search.toUpperCase().trim())
            )
            .map((pub) => <CardPubHome pub={pub} key={pub._id}></CardPubHome>)}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Home;
