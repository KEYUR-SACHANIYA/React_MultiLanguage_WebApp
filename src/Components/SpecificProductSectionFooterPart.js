import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector,useDispatch } from "react-redux";
import { setQuantity } from "../Reducers/SpecificProductSectionReducer";
import { useTranslation } from "react-i18next";

const SpecificProductSectionFooterPart = ({ product }) => {
    const quantity = useSelector((state) => state.specificProductSectionState.quantity)
    const dispatch = useDispatch();
    const {t} = useTranslation(); 
    const {button} = JSON.parse(t("specificProductSection_content"));

    return (
        <>
            <Grid item xs={12} container spacing={3} alignItems="center">
                <Grid item xs={6} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quantity}
                            label="Quantity"
                            onChange={(event) => dispatch(setQuantity(event.target.value))}
                        >
                            <MenuItem value={1} selected>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={8}>
                    <Typography variant="h6" align="right">$ {product.price}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <Button variant="outlined" color="primary" fullWidth>{button.buyNow}</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="outlined" color="primary" fullWidth>{button.addToCart}</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default SpecificProductSectionFooterPart;
