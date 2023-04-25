import React, { useState } from "react";

export default function Hide() {
    const [opacity, setVisability] = useState("100%")
    function handleOpacity(event) {
        setVisability(event.target.value);
    };

    return (
        <div>
            <h2 style={{opacity: opacity}}>Hide</h2>
            <input type="range" min="0%" max="100%" onChange={handleOpacity} />
        </div>
    );
};