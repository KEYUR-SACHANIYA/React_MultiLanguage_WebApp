import { Paper, Grid} from "@material-ui/core";
import Box from '@mui/material/Box';
import React from "react";
import SpecificProductSectionHeaderPart from "./SpecificProductSectionHeaderPart";
import SpecificProductSectionContentPart from "./SpecificProductSectionContentPart";
import SpecificProductSectionFooterPart from "./SpecificProductSectionFooterPart";

const SpecificProductSection = ({ product }) => {

    return (
        <Box mt={6}>
            <Grid container justifyContent="center">
                <Grid item xs={11} sm={10}>
                    <Paper>
                        <Grid container justifyContent="space-evenly" style={{ padding: "2rem" }} spacing={2}>
                            <Grid item xs={11} sm={6} md={4}>
                                <img src={product.image} alt="ProductImage" style={{ height: "70vh", width: "100%" }}></img>
                            </Grid>
                            <Grid item xs={11} sm={6} md={7}>
                                <Grid container spacing={1}>
                                    <SpecificProductSectionHeaderPart product={product}/>
                                    <SpecificProductSectionContentPart product={product}/>
                                    <SpecificProductSectionFooterPart product={product}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>

    );
}

export default SpecificProductSection;