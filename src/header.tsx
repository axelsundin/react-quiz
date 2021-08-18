// header inte material ui
import React, { Component, CSSProperties } from 'react';
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

export default function AppHeader() {
    return (
        <div id="headerContainer" style={{...headerContainer}}>
            <h1>Välkommen</h1>
            <h3>Sugen på Quiz?</h3>
        </div>
   /*<Container> 
        <Typography>

        </Typography>  
    </Container> */
    
    
    );
}
const headerContainer: CSSProperties = {
    height: '15%',
    width: "100vw",

    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "black",
    color: "white",
};