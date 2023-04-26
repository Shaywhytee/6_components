import React, { useState } from "react";

export default function BackgroundColor(props) {
  const [backgroundColor, setBackgroundColor] = useState("#ff0000");
  function handleColorChange(event) {
    setBackgroundColor(event.target.value);
    props.onChangeBgColor(event.target.value);
  };

  return (
    <div>
      <h2 style={{ backgroundColor: backgroundColor, color: props.color}}>{props.text}</h2>
      <input type="color" value={backgroundColor} onChange={handleColorChange} />
    </div>
  );
};