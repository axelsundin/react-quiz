import React, { Component, CSSProperties } from 'react';
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined';

export default function AppFooter() {
    return (
       /*  <div id="footerContainer" style={{...footerContainer}}> */
    <Container>
        <Typography 
            variant="h6" component="h3"
            color="primary"
            align="center"
            gutterBottom 
        >
            Create a note with typography
        </Typography> 

        <Button 
            href="http://google.com" 
            onClick= {()=> console.log('you clicked me')}
            type="submit"
            color="primary"
            variant="outlined"
            
        > 
            Submit
        </Button>
        
        <br />

        { /* icons */}
        <Brightness6OutlinedIcon /> 
    </Container>
        /* </div> */
    )
}

/*  const footerContainer: CSSProperties = {
    height: '15%',
    width: "100vw",

    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "red",
    color: "white",
};  */