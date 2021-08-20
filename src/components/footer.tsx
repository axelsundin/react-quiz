import { CSSProperties } from 'react';
import { Typography } from '@material-ui/core'

import Container from '@material-ui/core/Container'


export default function AppFooter() {
    /* throw new Error() */
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

    </Container>
    </div>
       
    );
}

  const footerContainer: CSSProperties = {
    height: "15%",
    width: "100vw",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "black",
    color: "white",
};