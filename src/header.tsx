// header inte material ui
import React, { Component, CSSProperties } from 'react';

export default function AppHeader() {
    return (
        <div id="headerContainer" style={{...headerContainer}}>
            <h1>Välkommen</h1>
            <h3>Sugen på Quiz?</h3>
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