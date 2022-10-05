import React,{ useState } from 'react';
import { HexColorPicker } from "react-colorful";
import Grid from './Components/Grid';
export default function Color() {
const [color, setColor] = useState("#aabbcc");

function changeColor(e) {
  let newColor = e
  setColor(newColor)
}
  return (
      <div className='App'>
        <HexColorPicker className='color' color={color} onChange={changeColor} />
        <Grid color={color}/>
      </div>
  )
}

