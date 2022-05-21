import { Grid, Link, Typography, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
    linkStyle: {
        fontSize: "1rem",
        marginBottom: ".2rem",
        textDecoration:"none",
        color: "lightgray",
        '&:hover': {
            color: "white",
            textDecoration:"none"
        }
    },
    footerHeading: {
        display: "inline-block",
        color: "white",
        margin: ".3rem 0px",
        borderBottom: "1px solid white",
        '&:hover': {
            borderBottom: "2px solid white",
            color: "lightgray"
        }
    },
    footerIcon: {
        color: "lightgray",
        '&:hover': {
            color: "white"
        }
    }
});

const FooterSection = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const {title:company,text:companyText} = JSON.parse(t("footerSection_company"));
    const {title:getHelp,text:getHelpText} = JSON.parse(t("footerSection_gethelp"));
    const {title:onlineShop,text:onlineShopText} = JSON.parse(t("footerSection_onlineshop"));
    const {title:followus} = JSON.parse(t("footerSection_followus"));
    return (<>
        <Box bgcolor="#4a4a4a" style={{ marginTop: "3rem", padding: "1rem 1rem",position:"relative",bottom:"0px" }}>
            <Grid container justifyContent="center">

                <Grid item xs={10} sm={6} lg={3} container direction="column" >
                    <Box>
                        <Typography variant="h6" className={classes.footerHeading}>
                            {company}
                        </Typography>
                    </Box>
                    <NavLink to="/about" className={classes.linkStyle}>{companyText[0]}</NavLink>
                    <NavLink to="/contact" className={classes.linkStyle}>{companyText[1]}</NavLink>
                    <NavLink to="/images" className={classes.linkStyle}>{companyText[2]}</NavLink>
                    <NavLink to="/" className={classes.linkStyle}>{companyText[3]}</NavLink>
                </Grid>

                <Grid item xs={10} sm={6} lg={3} container direction="column" >
                    <Box>
                        <Typography variant="h6" className={classes.footerHeading}>
                            {getHelp}
                        </Typography>
                    </Box>
                    <Link className={classes.linkStyle}>{getHelpText[0]}</Link>
                    <Link className={classes.linkStyle}>{getHelpText[1]}</Link>
                    <Link className={classes.linkStyle}>{getHelpText[2]}</Link>
                    <Link className={classes.linkStyle}>{getHelpText[3]}</Link>
                </Grid>
                <Grid item xs={10} sm={6} lg={3} container direction="column" >
                    <Box>
                        <Typography variant="h6" className={classes.footerHeading}>
                            {onlineShop}
                        </Typography>
                    </Box>
                    <Link className={classes.linkStyle}>{onlineShopText[0]}</Link>
                    <Link className={classes.linkStyle}>{onlineShopText[1]}</Link>
                    <Link className={classes.linkStyle}>{onlineShopText[2]}</Link>
                    <Link className={classes.linkStyle}>{onlineShopText[3]}</Link>
                </Grid>
                <Grid item xs={10} sm={6} lg={3} container direction="column">
                    <Grid item>
                        <Typography variant="h6" className={classes.footerHeading}>
                            {followus}
                        </Typography>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item>
                            <FacebookIcon fontSize="large" className={classes.footerIcon} />
                        </Grid>
                        <Grid item>
                            <TwitterIcon fontSize="large" className={classes.footerIcon} />
                        </Grid>
                        <Grid item>
                            <InstagramIcon fontSize="large" className={classes.footerIcon} />
                        </Grid>
                        <Grid item>
                            <LinkedInIcon fontSize="large" className={classes.footerIcon} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </>);
}

export default FooterSection;