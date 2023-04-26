import React, { useState } from "react";

export default function Hide(props) {
    console.log(props.align)
    const [opacity, setOpacity] = useState(1);
    function handleOpacity(event) {
        setOpacity(event.target.value);
        props.onOpacityChange(event.target.value)
    };

    return (
        <div>
            <h2 style={{ opacity: opacity, textAlign: props.align, color: props.color, backgroundColor: props.backgroundColor, fontFamily: props.font,  fontSize: props.fontSize}}>{props.text}</h2>
            <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={handleOpacity} />
        </div>
    );
};