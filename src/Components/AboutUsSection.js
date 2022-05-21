import { Container, Grid, Box ,Typography} from "@material-ui/core";
import React from "react";
import LeftSideAboutUsSection from "./LeftSideAboutUsSection";
import RightSideAboutUsSection from "./RightSideAboutUsSection";
import { makeStyles } from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    heading: {
        borderBottom: "1px solid gray",
        display: "inline-block",
        color: "gray",
        '&:hover': {
            borderBottom:"0px",
        }
    }
});

const AbouUsSection = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <>
            <Container>
                <Box textAlign="center">
                    <Typography variant="h4" align="center" className={classes.heading} style={{ marginTop: "2rem",marginBottom:"3rem" }}>
                        {t("aboutusSection_title")}
                    </Typography>
                </Box>
                <Box justifyContent="center">
                    <Grid container justifyContent="space-evenly" spacing={4}>
                        <Grid item xs={12} md={6}>
                            <LeftSideAboutUsSection />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <RightSideAboutUsSection />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default AbouUsSection;