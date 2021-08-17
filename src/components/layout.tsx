import React, { Component, CSSProperties } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../game";
import ChooseName from "./ChooseName";
/* import Footer from "../footer"; */

export default function Layout() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div id="mainContainer" style={{ ...mainContainer }}>
            <Link to="/game">PLAY</Link>
            <Link to="/highscore">HIGHSCORE</Link>
            <Link to="/settings">SETTINGS</Link>
          </div>
        </Route>
        <Route path="/game">
          <div id="mainContainer" style={{ ...mainContainer }}>
            <Game />
          </div>
        </Route>
        <Route path="/*">
          <div id="mainContainer" style={{ ...mainContainer }}>
            <h1>Denna sidan finns ej</h1>
            <Link to="/">TILLBAKA TILL START</Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

const mainContainer: CSSProperties = {
  height: "70vh",
  minWidth: "250px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
