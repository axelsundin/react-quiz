import { Button, Input, } from "@material-ui/core";
import { PinDropSharp } from "@material-ui/icons";
import React, { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import {QuestionState, Difficulty} from "../API"
import RadioButtonsGroup from "./chooseDifficulty";

type SettingProps = {
    action: () => void
}

export default function ChooseName({action}: SettingProps) {
    const [name, setName] = useState('');
    return (
        <div id="gameSettings" style={{...centerContent}}>
        <Input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <RadioButtonsGroup />
        {(name) && <Button onClick={action}><Link to="/game">Play</Link></Button>}
        </div>
    )
}

const centerContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

