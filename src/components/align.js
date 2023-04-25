import React, { useState } from "react";


export default function Align() {
  const [align, setAlign] = useState("left");
  function leftAlign() {
    setAlign("left");
  };
  function centerAlign() {
    setAlign("center");
  };
  
  function rightAlign() {
    setAlign("right");
  };
  return (
    <div>
        <h2 style={{ textAlign: align }}>Align</h2>
        <button onClick={leftAlign}>left</button>
        <button onClick={centerAlign}>center</button>
        <button onClick={rightAlign}>right</button>
        <button className="submit_color">Submit</button>
    </div>
  )
}