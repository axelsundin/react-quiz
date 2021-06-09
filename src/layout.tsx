import React, { Component, CSSProperties } from 'react';

export default function Layout() {
    return (
        <div id="mainContainer" style={{...mainContainer}}>
            <Button name="PLAY" />
            <Button name="HIGHSCORE" />
            <Button name="SETTINGS" />
        </div>
    )
}

type Props = {name: string,}

function Button(props: Props) {
    return <button>{props.name}</button>
}

const mainContainer: CSSProperties = {
    height: '100vh',
    width: "50%",
    minWidth: '250px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center"
};

