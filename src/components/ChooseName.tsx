import { Button, Input } from "@material-ui/core";
import React, { CSSProperties, useState, useContext } from "react";

import { Link } from "react-router-dom";
import ChooseDifficulty from "./ChooseDifficulty";

import { UserContext } from "../game";
import ErrorBoundary from "./errorBoundary";
import { type } from "os";
import ChooseCategory from "./ChooseCategory";

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
      <ChooseCategory />

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
