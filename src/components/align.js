import React, { useState } from "react";

export default function Align(props) {
  console.log(props.fontSize)
  const [align, setAlign] = useState("left");
  function leftAlign() {
    setAlign("left");
    props.onAlignChange(align)
  };
  function centerAlign() {
    setAlign("center");
    props.onAlignChange(align)
  };
  function rightAlign() {
    setAlign("right");
    props.onAlignChange(align)
  };
  return (
    <div>
      <h2 style={{ textAlign: align, color: props.color, backgroundColor: props.backgroundColor, fontFamily: props.font,  fontSize: props.fontSize}}>{props.text}</h2>
      <button onClick={leftAlign}>left</button>
      <button onClick={centerAlign}>center</button>
      <button onClick={rightAlign}>right</button>
    </div>
  );
};