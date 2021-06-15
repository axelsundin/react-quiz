import { Button, Input } from "@material-ui/core";
import React, { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";

export default function ChooseName() {
    const [name, setName] = useState('');
    return (
        <div  style={{...centerContent}}>
        <Input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
        />
        {(name) && <Button><Link to="/game">Play</Link></Button>}
        </div>
    )

        /* return (
            <div>
                <h3>Enter name:</h3>
                <input id="nameInput" type="text" />
                <br />
                <Link to="/game">PLAY</Link>
            </div>
        ) */
}

const centerContent: CSSProperties = {
    display: 'flex',
    flexDirection: 'column'
}

