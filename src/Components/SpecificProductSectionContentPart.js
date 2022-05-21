import React from "react";
import {Grid,Typography} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useSelector,useDispatch } from "react-redux";
import { setOpen } from "../Reducers/SpecificProductSectionReducer";
import { useTranslation } from "react-i18next";

const SpecificProductSectionContentPart = ({product}) => {
    const open = useSelector((state) => state.specificProductSectionState.open)
    const dispatch = useDispatch();
    const {t} = useTranslation(); 
    const {title,text} = JSON.parse(t("specificProductSection_content"));
    
    return (
        <>
            <Grid item xs={12}>
                <Typography variant="subtitle2">{product.description}</Typography>
            </Grid>
            <Grid item xs={12}>
                <ListItem button onClick={()=> dispatch(setOpen())}>
                    <ListItemText primary={title} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemText primary={text[0]}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={text[1]}/>
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary={text[2]}/>
                        </ListItem>
                    </List>
                </Collapse>
            </Grid>
        </>
    );
}

export default SpecificProductSectionContentPart;