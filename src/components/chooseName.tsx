import React from "react";
import { Link } from "react-router-dom";

export default class ChooseName extends React.Component {
    render() {
        return (
            <div>
                <h3>Enter name:</h3>
                <input type="text" />
                <br />
                <Link to="/game">PLAY</Link>
            </div>
        ) 
    }
}