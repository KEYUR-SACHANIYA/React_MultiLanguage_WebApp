import { Box, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
    heading: {
        borderBottom: "1px solid gray",
        display: "inline-block",
        color: "gray",
        '&:hover': {
            borderBottom: "0px",
        }
    }
});

const ProductSection = () => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (<>
        <Box maxWidth="100%" overflow="hidden" textAlign="center">
            <Typography variant="h4" align="center" className={classes.heading} style={{ margin: "3rem 0" }}>
                {t("productSection_title")}
            </Typography>

            <Container>
                <Grid container justifyContent="space-evenly" spacing={3}>

                    {
                        JSON.parse(t("productSection_products")).map((item, index) => {
                            if (index < 6) {
                                return (
                                    <Grid item sm={5} xs={11} md={4} style={{ marginBottom: "1.5rem" }} key={index}>
                                        <NavLink to={`/product/${item.id}`} style={{textDecoration:"none"}}>
                                            <ProductCard item={item}></ProductCard>
                                        </NavLink>
                                    </Grid>
                                );
                            }
                            return null;
                        }
                        )
                    }

                </Grid>
            </Container>
        </Box>

    </>);
}

export default ProductSection;