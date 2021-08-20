import React, { Component, CSSProperties,useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../game";

import ErrorBoundary from "./errorBoundary";

import Brightness6OutlinedIcon from "@material-ui/icons/Brightness6Outlined";
import { useTheme } from "./ThemeContext";



export default function Layout() {
  /* throw new Error() */
  
    const [fontSize, updateFontSize] = useState("100%");
  
    const mainContainer: CSSProperties = {
    height: "70vh",
    minWidth: "250px",
    fontSize: fontSize,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left"
  };

function Font(){
  
  function handleClick()  {
    
    if(fontSize==="100%"){
      updateFontSize("200%")
    }else{
      updateFontSize("100%")
    }


    

  }
  
  return <button onClick={handleClick}>Change font Size</button>
}





  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/">
            <div id="mainContainer" style={{ ...mainContainer }}>
              
             <button style={{fontSize:"20px",padding:"5px"}}> <Link to="/game">PLAY</Link></button> 
              
             <button style={{fontSize:"20px",padding:"5px"}}><Link to="/settings">SETTINGS</Link></button> 
            </div>
          </Route>
          <Route path="/game">
            <div id="mainContainer" style={{ ...mainContainer }}>
              
              <Game />
            </div>
          </Route>
          
          <Route path="/settings">
            <div id="mainContainer" style={{ ...mainContainer }}>
              <Brightness6OutlinedIcon />
              <Page />
              <Font />
              <Link to="/">TILLBAKA TILL START</Link>
            </div>
          </Route>
          <Route path="/*">
            <div id="mainContainer" style={{ ...mainContainer }}>
              
              <Font/>
              <Link to="/">TILLBAKA TILL START</Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );



}

const Page = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {/* <h1>{theme}</h1> */}
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Switch to light mode" : "switch to dark mode"}
        {/*  <Brightness6OutlinedIcon /> */}
      </button>
    </div>
  );
};


