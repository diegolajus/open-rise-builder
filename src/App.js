import React,{ useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Grid from './Components/Grid';

export default function Color() {
const [color, setColor] = useState("#aabbcc");

function changeColor(e) {
  let newColor = e
  setColor(newColor)
  console.log('newColor',newColor)
}
  return (
    <div>
      <HexColorPicker color={color} onChange={changeColor} />
      <div><Grid color={color}/></div>
    </div>    
  )
}

