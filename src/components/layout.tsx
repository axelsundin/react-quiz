import React, { Component, CSSProperties } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../game";
import ChooseName from "./ChooseName";
import ErrorBoundary from "./errorBoundary";
/* import Footer from "../footer"; */
import Brightness6OutlinedIcon from "@material-ui/icons/Brightness6Outlined";
import { useTheme } from "./ThemeContext";

export default function Layout() {
  /* throw new Error() */
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route exact path="/">
            <div id="mainContainer" style={{ ...mainContainer }}>
              <Page />
              <Brightness6OutlinedIcon />
              <Link to="/game">PLAY</Link>
              <Link to="/highscore">HIGHSCORE</Link>
              <Link to="/settings">SETTINGS</Link>
            </div>
          </Route>
          <Route path="/game">
            <div id="mainContainer" style={{ ...mainContainer }}>
              <Page />
              <Brightness6OutlinedIcon />
              <Game />
            </div>
          </Route>
          <Route path="/*">
            <div id="mainContainer" style={{ ...mainContainer }}>
              <Page />
              <Brightness6OutlinedIcon />
              <h1>Denna sidan finns ej</h1>
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

const mainContainer: CSSProperties = {
  height: "70vh",
  minWidth: "250px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
