import React,{ useState } from 'react';
import { HexColorPicker } from "react-colorful";

export default function Color() {
const [color, setColor] = useState("#aabbcc");

function changeColor(e) {
  let newColor = e
  setColor(newColor)
  console.log('newColor',newColor)
}
  return (
    <div>
      <HexColorPicker onChange={changeColor} />
    </div>    
  )
}


