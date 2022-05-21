import React from "react";
import { Grid,Typography} from "@material-ui/core";
import { Rating } from "@mui/material";

const SpecificProductSectionHeaderPart = ({product}) => {
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="h6" fullwidth="true">{product.title}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">({product.category})</Typography>
            </Grid>
            <Grid item xs={12} container alignItems="center" style={{ borderBottom: "1px solid lightgray" }}>
                <Rating name="read-only" precision={0.5} defaultValue={2} value={product.rating ? product.rating.rate : 0} readOnly />
                <Typography variant="body1" style={{ display: "inline-block", marginLeft: "5px" }} >{product.rating ? product.rating.count : ""} ratings</Typography>
            </Grid>
        </>
    );
}

export default SpecificProductSectionHeaderPart;