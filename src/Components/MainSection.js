import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles({
    mainSection : {
        backgroundImage:'URL("/mainimage.jpg")',
        backgroundSize:"100vw 100vh"
    }
});

const MainSection = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (<>
        <Box overflow="hidden" position="relative" height={{ xs: "70vh", sm: "100vh" }} className={classes.mainSection}>
            <Box width="100%" justifyContent="center" position="absolute" top="35%" display="flex" color="white" style={{opacity:1}}>
                <Box width={{ xs: "90%", md: "70%" }} justifyContent="center" color="white" fontWeight="bold">
                    <Typography variant="h5" align="center" color="primary">
                        {t("mainSection_title")}
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={3} fontWeight="bold ">  
                    <Button variant="outlined" color="primary" >
                        {t("mainSection_button")}
                    </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>);
}

export default MainSection;