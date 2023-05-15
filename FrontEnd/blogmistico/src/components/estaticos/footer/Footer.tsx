import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer (){
    return (
        <>
            <Grid container direction="row" justifyContent= "center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#BF4E30", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white",  fontWeight: "bold" }}>Follow me: </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" >
                            <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon style={{ fontSize: 38, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#FFB997", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#BF4E30", fontWeight: "bold", }} >© 2023 Trabalho acadêmico realizado no Bootcamp da Generation Brazil.</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://github.com/lariaparecida/ProjetoLojaMistica" style={{ textDecoration: 'none' }}>
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" ,  fontWeight: "bold"}} align="center"> github.com/lariaparecida/</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    </>

    )
}

export default Footer;