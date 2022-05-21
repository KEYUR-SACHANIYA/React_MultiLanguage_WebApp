import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from "react-i18next";

const Product = ({item}) => {
    const {t} = useTranslation();

    return (
        <>
            <Card style={{height:"500px"}}>
                <CardActionArea style={{height:"90%",overflowY:"auto"}}>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="150"
                        image={item.image}
                        title="Contemplative Reptile"
                        width="100%"
                        style={{objectFit:"contain",marginTop:"10px"}}
                    />
                    <CardContent height="300px">
                        <Typography gutterBottom variant="h4" align="justify" style={{fontSize:"1.3rem"}}>
                         {t("productSection_item_title",{title:item.title})}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align="justify" style={{marginBottom:".5rem"}}>
                         {t("productSection_item_description",{description:item.description})}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" align="left">
                            $ {t("productSection_item_price",{price:item.price})}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{height:"10%",backgroundColor:"lightgray",padding:"0",textTransform:"none"}}>
                    <Button size="small" color="primary" fullWidth style={{height:"100%"}}>
                     {t("productSection_item_button")}
                    </Button>
           
                </CardActions>
            </Card>
        </>
    );
}

export default Product;