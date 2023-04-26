import React, { useState } from "react";

export default function Font(props) {
    const [font, setFont] = useState("");
    console.log(props.backgroundColor)

    const handleFontChange = (event) => {
        setFont(event.target.value);
        props.onChangeFont(event.target.value);
    };
    
    return (
        <div>
            <h2 style={{fontFamily: font, color: props.color, backgroundColor: props.backgroundColor}}>{props.text}</h2>
            <select value={font} onChange={handleFontChange}>
                <option value="">--Select a font--</option>
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Time New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="Courier">Courier</option>
                <option value="Verdana">Verdana</option>
                <option value="Impact">Impact</option>
            </select>
        </div>
    )
}