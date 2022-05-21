import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { openNavbarMenu, closeNavbarMenu } from "../Reducers/NavbarReducer";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const useStyles = makeStyles({
    linkStyle: {
        marginRight: "2rem",
        fontSize: "1.2rem",
        color: "lightgray",
        textDecoration: "none",
        '&:hover': {
            fontWeight: "bold",
            color: "white",
        }
    },
    collapseLinkStyle: {
        marginRight: "2rem",
        fontSize: "1.2rem",
        color: "gray",
        textDecoration: "none",
        '&:hover': {
            fontWeight: "bold",
        }
    }
    ,
    menuIcon: {
        fontSize: "2rem"
    }

});

const languages = [
    {
        code: "en",
        name: "English",
        countryCode: "gb"
    },
    {
        code: "hi",
        name: "हिन्दी",
        countryCode: "in"
    },
    {
        code: "gu",
        name: "ગુજરાતી",
        countryCode: "in"
    }
];

const NavbarSection = () => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const navbarState = useSelector((state) => state.navbarState.value);
    const dispatch = useDispatch();


    const pages = [
    { title: t("navbar_home"), path: "/" }, 
    { title: t("navbar_products"), path: "/product" },
    { title: t("navbar_images"), path: "/images" }, 
    { title: t("navbar_contactUs"), path: "/contact" },
    { title: t("navbar_aboutUs"), path: "/about" }
    ];

    return (
        <>
            <AppBar position="static">
                <Box py={{ md: '.8rem', xs: '1.5' }} pl={{ xs: ".5rem", md: "4" }}>
                    <Grid container alignItems="center">
                        <Grid item md={3} lg={5} xs={5} sm={7}>
                            <Typography variant="h5">{t("navbar_title")}</Typography>
                        </Grid>
                        <Grid item md={2} xs={6} sm={3}>
                            <div className="dropdown d-inline-block">
                                <button className="btn btn-light btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {t("language")}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {
                                        languages.map(({ code, name, countryCode },index) => {
                                            return <li key={index}>
                                                <button className="dropdown-item" onClick={() => i18n.changeLanguage(code)}>
                                                    <i className={`flag-icon flag-icon-${countryCode} mx-2`}></i>
                                                    {name}
                                                </button>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </Grid>
                        <Grid item container md={7} lg={5} xs={1} sm={2} justifyContent="flex-end">
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent="flex-end">
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={() => dispatch(openNavbarMenu(true))}
                                    color="inherit"
                                    id="navbarIcon"
                                >
                                    <MenuIcon className={classes.menuIcon} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={document.getElementById("navbarIcon")}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(navbarState)}
                                    onClose={() => dispatch(closeNavbarMenu())}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page, index) => (
                                        <MenuItem key={index} onClick={() => dispatch(closeNavbarMenu())}>
                                            <NavLink to={page.path} className={classes.collapseLinkStyle}
                                            >{page.title}
                                            </NavLink>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end" pr={2}>
                                {pages.map((page, index) => (
                                    <NavLink to={page.path} className={classes.linkStyle} key={index}>
                                        {page.title}
                                    </NavLink>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </AppBar>
        </>
    )
}

export default NavbarSection;