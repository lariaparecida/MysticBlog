import { useState } from 'react'
import {Grid} from '@material-ui/core'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import './App.css'
import Home from './paginas/home/Home';

// let nome = 'Larissa';
function App() {

  return (

    <>

      <Navbar/>
      <Home/>
      <Footer/>

    </>

    
    // <h1>{nome}</h1> // puxa do Home quando ele é chamado

      // <Home/>

      // <>
      //   <Grid container spacing={3}>
      //     <Grid item xs={12} sm={12}>
      //       <Home/>
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <Home/>
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <Home/>
      //     </Grid>
      //     <Grid item xs={12} sm={3}>
      //       <Home/>
      //     </Grid>
      //     <Grid item xs={12} sm={3}>
      //       <Home/>
      //     </Grid>
      //     <Grid item xs={12} sm={3}>
      //       <Home/>
      //     </Grid>
      //     <Grid item xs={12} sm={3}>
      //       <Home/>
      //     </Grid>
      //   </Grid>
      // </>

  )
}

export default App
