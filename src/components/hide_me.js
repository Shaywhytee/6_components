import React, { useState } from "react";

export default function Hide() {
    const [opacity, setOpacity] = useState(1);
    function handleOpacity(event) {
        setOpacity(event.target.value);
    };

    return (
        <div>
            <h2 style={{ opacity: opacity }}>Hide</h2>
            <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={handleOpacity} />
            <button className="submit_opacity">submit</button>
        </div>
    );
};