import React, { useState } from "react";

export default function Text(props) {
    const [fontSize, setFontSize] = useState(16);
    const [sizeChange, setSizeChange] = useState(1);

    function handleSizeInput(change) {
        const inputSizeChange = parseInt(change.target.value);
        if (!isNaN(inputSizeChange)){
            setSizeChange(parseInt(change.target.value));
            props.onSizeChange(parseInt(change.target.value));
        }
    }
    function increaseSize() {
        setFontSize(fontSize + sizeChange);
    }
    function decreaseSize() {
        setFontSize(fontSize - sizeChange);
    }
    return (
    <div>
        <h2 style={{ fontSize: `${fontSize}px`, fontFamily: props.font, color: props.color, backgroundColor: props.backgroundColor }}>{props.text}</h2>
        <input type="text" value={sizeChange} onChange={handleSizeInput} />
        <button onClick={increaseSize}>Increase</button>
        <button onClick={decreaseSize}>Decrease</button>
    </div>
    );
};
