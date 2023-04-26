import React, { useState } from 'react';


import Align from "./align"
import Color from "./color_me"
import Hide from "./hide_me"
import Text from "./text"
import Font from "./font"
import BackgroundColor from './background';
import EndText from './end_text';

export default function App() {
  const [step, setStep] = useState(1);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [font, setFont] = useState("");
  const [align, setAlign] = useState("");
  const [opacity, setOpacity] = useState("");
  const [fontSize, setFontSize] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setStep(step + 1);
  }
  function renderStep() {
    switch (step) {
      case 1:
        return (
          <Color
            onSubmit={handleSubmit}
            onChangeText={setText}
            onChangeColor={setColor}
          />
        );
      case 2:
        return(
          <BackgroundColor
            onSubmit={handleSubmit}
            onChangeBgColor={setBackgroundColor}
            color={color}
            text={text}
          />
        );
      case 3:
        return (
          <Font
            onSubmit={handleSubmit}
            onChangeFont={setFont}
            color={color}
            text={text}
            backgroundColor={backgroundColor}
          />
        );
      case 4:
        return (
          <Text
            onSubmit={handleSubmit}
            onChangeSize={setFontSize}
            color={color}
            text={text}
            backgroundColor={backgroundColor}
            font={font}
          />
        );
      case 5:
        return (
          <Align
            onSubmit={handleSubmit}
            onChangeAlign={setAlign}
            color={color}
            text={text}
            backgroundColor={backgroundColor}
            font={font}
            fontSize={fontSize}
          />
        );
      case 6:
        return (
          <Hide
            onSubmit={handleSubmit}
            onChangeOpacity={setOpacity}
          />
        );
      case 7:
        return (
          <EndText
            text={text}
            color={color}
            backgroundColor={backgroundColor}
            font={font}
            textSize={textSize}
            setOpacity={opacity}
            align={align}
          />
        )
      default:
        return null;
    }
  }
  return (
    <div className="app">
    <h1>Title Style</h1>
    {renderStep()}
    {<button onClick={handleSubmit}>Submit</button>}
  </div>
  );
}