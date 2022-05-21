import {  Box, Container, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Snackbar from '@mui/material/Snackbar';
import { Alert ,TextField} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { handleSnakebarOpen,handleSnakebarClose,handleSnakebarAlertBox} from "../Reducers/ContactUsSectionReducer";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
    heading: {
        borderBottom: "1px solid gray",
        display: "inline-block",
        color: "gray",
        margin: "3rem 0rem",
        '&:hover': {
            borderBottom: "0px",
        }
    }
})


const ContactUsSection = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const {firstName,lastName,email,mobileNo,yourMessage} = JSON.parse(t("contactusSection_formLabel"));
    const {error,success} = JSON.parse(t("contactusSection_snackbar_text"));
    const {snakebar,snakebarAlertBox} = useSelector((state) => state.contactUsSectionState);
    const dispatch = useDispatch();

    const handleClick = () => () => {
        const firstNameTextField = document.getElementById("contactFormFirstName");
        const lastNameTextField = document.getElementById("contactFormLastName");
        const emailTextField = document.getElementById("contactFormEmail");
        const mobileNoTextField = document.getElementById("contactFormMobileNo");
        const messageTextField = document.getElementById("contactFormMessage");

        if(firstNameTextField.value !== "" && lastNameTextField.value !== "" && emailTextField.value !== "" && mobileNoTextField.value !== "" && messageTextField.value !== ""){
            dispatch(handleSnakebarAlertBox({alertType:"success",alertMessage:success}));
            firstNameTextField.value = "";lastNameTextField.value = "";emailTextField.value = "";mobileNoTextField.value = "";messageTextField.value = "";
        }
        else{
            dispatch(handleSnakebarAlertBox({alertType:"error",alertMessage:error}));
        }

        dispatch(handleSnakebarOpen());
    };

    return (
        <>
            <Container>
                <Box textAlign="center">
                    <Typography variant="h4" align="center" className={classes.heading}>
                        {t("contactusSection_title")}
                    </Typography>
                </Box>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6} style={{border:"2px solid lightgray",borderRadius:"5px",padding:"1rem"}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField variant="outlined" label={firstName} size="small" fullWidth id="contactFormFirstName" autoComplete="off"></TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField variant="outlined" label={lastName} size="small" fullWidth id="contactFormLastName" autoComplete="off"></TextField>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label={email} type="email" size="small" fullWidth id="contactFormEmail" autoComplete="off"></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label={mobileNo} type="phone" size="small" fullWidth id="contactFormMobileNo" autoComplete="off"></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label={yourMessage} multiline type="text" minRows={2} size="small" fullWidth id="contactFormMessage" autoComplete="off"></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="inherit" fullWidth onClick={handleClick()}>
                                    {t("contactusSection_formButton")}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Snackbar
                open={snakebar}
                onClose={() => dispatch(handleSnakebarClose())}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                autoHideDuration={2000}
            >
                <Alert onClose={() => dispatch(handleSnakebarClose())} severity={snakebarAlertBox.alertType} variant='filled' sx={{ width: '100%' }}>
                  {snakebarAlertBox.alertMessage}
                </Alert>
            </Snackbar>
        </>
    );
}

export default ContactUsSection;