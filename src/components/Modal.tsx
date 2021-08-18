import React, { CSSProperties, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../game";

const MODAL_STYLE: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#FFF",
  padding: "200px",
  zIndex: 1000,
};

const OVERLAY_STYLE: CSSProperties = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  background: "rgba(0, 0, 0, .8)",
  zIndex: 1000,
};

export default function Modal() {
  const { name, difficulty, score, categoryName } = useContext(UserContext);
  const portalDiv = document.getElementById("portal");
  
  console.log(portalDiv);
  return portalDiv
  ? ReactDOM.createPortal(
    <>
          <div style={OVERLAY_STYLE}></div>
          <div style={MODAL_STYLE}>
            <h4>Name: {name}</h4>
            <h4>Difficulty: {difficulty}</h4>
            <h4>Category: {categoryName}</h4>
            <p className="score">Score: {score}</p>
            <Button>
              <Link to="/">Back to start</Link>
            </Button>
          </div>
        </>,
        portalDiv
        )
        : null;
        
}

