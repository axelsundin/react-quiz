import React, { Component, CSSProperties } from 'react';
import { Typography } from '@material-ui/core'
/* import Button from '@material-ui/core/Button' */
import Container from '@material-ui/core/Container'
/* import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined'; */

export default function AppFooter() {
    return (
        <div id="footerContainer" style={{...footerContainer}}> 
    <Container>
        <Typography 
            variant="h6" component="h3"
            color="primary"
            align="center"
            gutterBottom 
        >
            Systemutveckling Ramverk
        </Typography> 
        <Typography
            variant="subtitle2"
            color="primary"
            align="center"
        >
            Shahin, Axel och Sherin
        </Typography>
{/* 
        <Button 
           /*  href="/*"  
            onClick= {()=> console.log('you clicked me')}
            type="submit"
            color="primary"
            variant="outlined"
        > 
            
        </Button> */}
        

        { /* icon flytta till darkmode light mode  
      {   <Brightness6OutlinedIcon /> */}
    </Container>
    </div>
       
    );
}

  const footerContainer: CSSProperties = {
    height: '15%',
    width: "100vw",

    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "black",
    color: "white",
};