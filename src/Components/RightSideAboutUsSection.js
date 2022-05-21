import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Box} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { handleStepperNext,handleStepperBack,handleStepperReset} from "../Reducers/RightSideAboutUsSectionReducer";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    }
}));

export default function RightSideAboutUsSection() {
    const classes = useStyles();
    const {t} = useTranslation();
    const steps = JSON.parse(t("aboutusSection_stepper_steps"));
    const stepsButton = JSON.parse(t("aboutusSection_stepper_content_button"));
    const activeStepperStep = useSelector((state) => state.rightSideAboutUsSectionState.activeStepperStep);
    const dispatch = useDispatch();

    return (
         <Box>
            <Stepper activeStep={activeStepperStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{JSON.parse(t("aboutusSection_stepper_content"))[index]}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStepperStep === 0}
                                        onClick={() => dispatch(handleStepperBack())}
                                        className={classes.button}
                                    >
                                        {stepsButton.back}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => dispatch(handleStepperNext())}
                                        className={classes.button}
                                    >
                                        {activeStepperStep === steps.length - 1 ? stepsButton.finish : stepsButton.next}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStepperStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>{JSON.parse(t("aboutusSection_stepper_end")).text}</Typography>
                    <Button onClick={() => dispatch(handleStepperReset())} className={classes.button}>
                    {JSON.parse(t("aboutusSection_stepper_end")).reset}
                    </Button>
                </Paper>
            )}
        </Box>  
    );
}
