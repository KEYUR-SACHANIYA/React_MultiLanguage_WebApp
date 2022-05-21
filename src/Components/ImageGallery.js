import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Box, Typography, Grid } from '@material-ui/core';
import ImageModalBox from './ImageModalBox';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {openImageModalBox} from "../Reducers/ImageModaxBoxReducer";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
    heading: {
        borderBottom: "1px solid gray",
        display: "inline-block",
        color: "gray",
        '&:hover': {
            borderBottom: "0px",
        }
    },
    imageList: {
        width: 500,
        height: 450,
        objectFit: "contain"
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

export default function ImageGallary() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const showImageModalBox = (imageId) => {
        JSON.parse(t("productSection_products")).map((item) => {
            if (item.id === imageId) {
                dispatch(openImageModalBox(item));
            }
            return null;
        });
    }

    return (<>
        <ImageModalBox />
        <Box textAlign="center">
            <Typography variant="h4" align="center" className={classes.heading} style={{ margin: "3rem 0" }}>
                {t("imageGallarySection_title")}
            </Typography>
            <Grid container justifyContent="center">
                <Grid item container sm={10} md={9} xs={11} spacing={1} style={{ height: "500px", overflowY: "scroll", border: "2px solid lightgray", borderRadius: "5px" }}>
                    {JSON.parse(t("productSection_products")).map((item, index) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} style={{ height: "200px", objectFit: "contain", marginTop: "2rem" }} key={index}>
                                <ImageListItem>
                                    <NavLink to={`/product/${item.id}`}>
                                        <img src={item.image} alt={item.title} style={{ height: "200px", objectFit: "contain", width: "100%" }} />
                                    </NavLink>
                                    <ImageListItemBar
                                        style={{ textAlign: "left" }}
                                        title={item.title}
                                        subtitle={<span >$ {item.price}</span>}
                                        actionIcon={
                                            <IconButton aria-label={`info about ${item.title}`} onClick={() => showImageModalBox(item.id)} className={classes.icon}>
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Box>
    </>
    );
}
