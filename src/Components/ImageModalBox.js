import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Grid } from '@material-ui/core';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { useSelector, useDispatch } from 'react-redux';
import { closeImageModalBox} from "../Reducers/ImageModaxBoxReducer";
import { useTranslation } from 'react-i18next'; 

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70vw",
    maxHeight:"70vh",
    overflow:"auto",
    bgcolor: 'background.paper',
    border: '2px solid lightgray',
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
};

export default function ImageModalBox() {
    const {open,product} = useSelector((state) => state.imageModalBoxState);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    return (
        <Box justifyContent="center" position="relative">
            <Modal
                open={open}
                onClose={() => dispatch(closeImageModalBox())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                hideBackdrop
            >
                <Box sx={style}>
                    <Grid container spacing={3} alignItems='center'>
                        <Grid item sm={6} md={4} xs={12} >
                            <img src={product.image} alt="ProductImage" width="100%" height="100%" style={{maxHeight:"300px",minHeight:"100px"}}/>
                        </Grid>
                        <Grid item sm={6} md={8} xs={12} container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant='h6' align='left'>{product.title}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h6' align='left'>( {product.category} )</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body1' align='left'>{product.description}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h6' align='left'>₹ {product.price}</Typography>
                            </Grid>
                            <Grid item container xs={12} justifyContent='space-evenly' spacing={1}>
                                <Grid item md={6} xs={12}>
                                    <Button variant="outlined" color="primary" fullWidth>
                                        {JSON.parse(t("imageModalBox_button")).buyNow}
                                    </Button>
                                </Grid>
                                <Grid item md={6} xs={12}> 
                                    <Button variant="outlined" color="primary" onClick={() => dispatch(closeImageModalBox())} fullWidth>    {JSON.parse(t("imageModalBox_button")).close}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Button onClick={() => dispatch(closeImageModalBox())} style={{position:"absolute",top:"0px",right:"0px",color:"red"}}>
                            <CancelPresentationIcon fontSize='large'></CancelPresentationIcon>
                        </Button>
                    </Grid >
                </Box >
            </Modal >
        </Box >
    );
}
