// header inte material ui
import React, { Component, CSSProperties } from 'react';
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined';

export default function AppHeader() {
    return (
        <div id="headerContainer" style={{...headerContainer}}>
        <Container> 
            <Typography
                variant="h6">
                    Välkommen!
            </Typography> 
            <Typography 
                variant="subtitle2">
                    Sugen på Quiz?
            </Typography> 
        {/*     <Brightness6OutlinedIcon /> */}
        </Container> 
        </div>
    
    
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