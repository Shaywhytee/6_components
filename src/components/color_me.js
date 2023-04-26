import React, { useState } from "react";

export default function Color(props) {
  const [color, setColor] = useState("#ff0000");
  const [text, setText] = useState("Color");

  function handleColorChange(event) {
    setColor(event.target.value);
    props.onChangeColor(event.target.value);
  };

  function handleTextChange(event) {
    setText(event.target.value);
    props.onChangeText(event.target.value);
  };

  return (
    <div>
      <h2 style={{ color: color }}>{text}</h2>
      <input type="color" value={color} onChange={handleColorChange} />
      <input type="text" value={text} onChange={handleTextChange} />
    </div>
  );
};