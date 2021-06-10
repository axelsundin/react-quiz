import React, { Component, CSSProperties } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from '../game';
import ChooseName from './chooseName';

export default function Layout() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div id="mainContainer" style={{...mainContainer}}>
                        <Link to="/choose-name">PLAY</Link>
                        <Link to="/highscore">HIGHSCORE</Link>
                        <Link to="/settings">SETTINGS</Link>
                    </div>
                </Route>
                <Route path="/choose-name">
                    <div id="mainContainer" style={{...mainContainer}}>
                        <ChooseName />
                    </div>
                </Route>
                <Route path="/game">
                    <div id="mainContainer" style={{...mainContainer}}>
                        <Game />
                    </div>
                </Route>
            </Switch>
        
        </Router>
    )
}

const mainContainer: CSSProperties = {
    height: '100vh',
    width: "50%",
    minWidth: '250px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center"
};

