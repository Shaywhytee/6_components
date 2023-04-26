import React from "react";

export default function EndText(props) {
    const { text = '', color = '', backgroundColor = '', font = '', fontSize= '', opacity = 1 } = props;

    return (
        <div style={{ color: color, backgroundColor: backgroundColor, fontFamily: font, opacity: opacity, fontSize: fontSize }}>
            <h2>{text}</h2>
            <p>Color: {color}</p>
            <p>Background Color: {backgroundColor}</p>
            <p>Font: {font}</p>
            <p>Font Size: {fontSize}</p>
            <p>Opacity: {opacity}</p>
        </div>
    );
}