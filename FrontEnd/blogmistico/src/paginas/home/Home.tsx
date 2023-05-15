import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css'
import { Margin } from '@mui/icons-material';

// biblioteca @mui/material, é uma extensão de “correção” da versão @material-ui/core, que corrige alguns imports

function Home(){

    return( 
        
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "black" }}>
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={20} >
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#FFB997", fontWeight: "bold", fontFamily: "'EB Garamond', serif"  }}>Saudações.</Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#E7D7C1", fontWeight: "bold" , fontFamily: "'EB Garamond', serif"  }}>Você não chegou aqui por acaso.</Typography>

                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>
                    <Button variant="outlined" style={{ borderColor: "#FFB997", backgroundColor: "#BF4E30", color: "white",  fontWeight: "bold" }}>ver postagens</Button>
                </Box> 
            </Grid>
            <Grid item xs={6} style={{ display: "flex", justifyContent: "flex-end"}}>
                <img src="https://cdn.britannica.com/51/239351-138-0D6B3C28/Sandro-Botticelli-Birth-of-Venus.jpg?w=800&h=450&c=crop" alt="" height="384" />
            </Grid>
            <Grid xs={12} style={{ backgroundColor: "white" }}>
            </Grid>
        </Grid>
    </>

        // <>
            
        //     <Paper>
        //         <Box p={2}>
        //             <Box display="flex" justifyContent="center">
        //                 <h1>Título</h1>
        //             </Box>
        //             <img src="https://cdn.newswire.com/files/x/a2/b3/9f9b89ea24a72f13629116b184f6.png" alt="Logo" style={{width: "100%", height: "100%"}}/>
        //             <Box display="flex" justifyContent="center" p={5}>
        //                 <Button variant="contained" color="primary" style={{ marginRight: '10px'}} >Texto 1</Button>
        //                 <Button variant="contained" color="secondary" style={{ marginRight: '10px'}} >Texto 2</Button>
        //             </Box>
        //         </Box>
        //     </Paper>

        // </>
        
                    /* Paper>Box>Box>h1 EMMET*/

        //usar div pois só pode 1 elemento ser retornado
        // <> 
        //     <Grid container spacing={2}>
        //         <Grid item xs={12} sm={8}>
        //             <Paper style={{height: "100vh", background: "pink"}}/>
        //         </Grid>

        //         <Grid item container direction= "column" xs={12} sm={4} spacing={2}>
        //             <Grid item>
        //             <Paper style={{height: "49vh", background: "yellow"}}/>

        //             </Grid>
        //             <Grid item>
        //             <Paper style={{height: "49vh", background: "lightblue"}}/>
        //             </Grid>
        //         </Grid>

        //     </Grid>
        // </>
    );

}

export default Home;