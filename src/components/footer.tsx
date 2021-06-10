import React, { Component, CSSProperties } from 'react';

export default function AppFooter() {
    return (
        <div id="footerContainer" style={{...footerContainer}}>
            
        </div>
    );
}

const footerContainer: CSSProperties = {
    height: '15%',
    width: "100vw",

    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "black",
    color: "white",
};