import React,{ useState } from 'react';
import { HexColorPicker } from "react-colorful";

export default function Color() {
const [color, setColor] = useState("");

function changeColor(e) {
  let newColor = e
  setColor(newColor)
}
  return (
    <div id='color'>
      <HexColorPicker onChange={changeColor} />
    </div>    
  )
}


