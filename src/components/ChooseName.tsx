import { Button, Input } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import React, { CSSProperties, useState, useContext } from "react";

import { Link } from "react-router-dom";
import { QuestionState, Difficulty } from "../API";
import ChooseDifficulty from "./ChooseDifficulty";

import { UserContext } from "../game";

import { type } from "os";


export default function ChooseName() {
  const { name, setName, startTrivia } = useContext(UserContext);
  return (
    <div id="gameSettings" style={{ ...centerContent }}>
     
      <Input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      
     
      
      <ChooseDifficulty />

      {{ name } && (
        <Button onClick={startTrivia}>
          <Link to="/game">Play</Link>
        </Button>
      )}
    </div>

    
  );
  
}


const centerContent: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
