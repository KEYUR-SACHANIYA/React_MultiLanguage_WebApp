import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { handleCarouselNext,handleCarouselBack,handleActiveCarouselStep} from "../Reducers/LeftSideAboutUsSectionReducer";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 300,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function LeftSideAboutUsSection() {
  const classes = useStyles();
  const theme = useTheme();
  const {t} = useTranslation();
  const tutorialSteps = JSON.parse(t("aboutusSection_carousel_images"));
  const maxSteps = tutorialSteps.length;
  const activeCarouselStep = useSelector((state) => state.leftSideAboutUsSectionState.activeCarouselStep);
  const dispatch = useDispatch();

  const handleStepChange = (step) => {
    dispatch(handleActiveCarouselStep(step));
  };

  return (
    <Box>
      <Paper elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeCarouselStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeCarouselStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={index}>
            {Math.abs(activeCarouselStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeCarouselStep}
        style={{borderRadius:"4px"}}
        nextButton={
          <Button size="small" onClick={() => dispatch(handleCarouselNext())} disabled={activeCarouselStep === maxSteps - 1}>
            {JSON.parse(t("aboutusSection_carousel_button"))[1]}
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={() => dispatch(handleCarouselBack())} disabled={activeCarouselStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            {JSON.parse(t("aboutusSection_carousel_button"))[0]}
          </Button>
        }
      />
    </Box>
  );
}

export default LeftSideAboutUsSection;
