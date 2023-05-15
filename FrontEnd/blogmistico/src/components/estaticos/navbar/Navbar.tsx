import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import "./Navbar.css"
import {Box} from '@mui/material'

function Navbar (){
    return (
        
        <>
            <AppBar position="static">
        <Toolbar variant="dense" style={{ backgroundColor: "#BF4E30", height: "120px", display: "flex", justifyContent: "space-between" }} >

            <Box style={{ cursor: "pointer" }} >
                <Typography variant="h4" color="inherit" style={{ color: "#white" , fontWeight: "bold", fontFamily: "'EB Garamond', serif"  }}>
                    Grimório de Afrodite .
                </Typography>
            </Box>

        <Box display="flex" justifyContent="start">

                    <Box mx={1} style={{ cursor: "pointer" , backgroundColor: "#FFB997", padding: "10px", borderRadius: "10px"}}>
                        <Typography variant="h6" color="inherit" style={{ color: "#BF4E30" ,  fontWeight: "bold" }}>
                            Home
                        </Typography>
                    </Box>
                
                    <Box mx={1} style={{ cursor: "pointer" , backgroundColor: "#FFB997", padding: "10px", borderRadius: "10px"}}>
                    <Typography variant="h6" color="inherit" style={{ color: "#BF4E30",  fontWeight: "bold" }}>
                            Postagens
                        </Typography>
                    </Box>

                    <Box mx={1} style={{ cursor: "pointer" , backgroundColor: "#FFB997", padding: "10px", borderRadius: "10px"}}>
                    <Typography variant="h6" color="inherit" style={{ color: "#BF4E30",  fontWeight: "bold" }}>
                            Assunto
                        </Typography>
                    </Box>

                    <Box mx={1} style={{ cursor: "pointer" , backgroundColor: "#FFB997", padding: "10px", borderRadius: "10px"}}>
                    <Typography variant="h6" color="inherit" style={{ color: "#BF4E30",  fontWeight: "bold"  }}>
                            Novo assunto
                        </Typography>
                    </Box>

                    <Box mx={1} style={{ cursor: "pointer" , backgroundColor: "#FFB997", padding: "10px", borderRadius: "10px"}}>
                    <Typography variant="h6" color="inherit" style={{ color: "#BF4E30",  fontWeight: "bold"  }}>
                            Usuário
                        </Typography>
                    </Box>
        </Box>

        </Toolbar>
            </AppBar>



        </>

    )
}

export default Navbar;