import React,{ useState } from 'react';
import { HexColorPicker } from "react-colorful";
import '../Styles/responsive.scss'

export default function Color() {
const [color, setColor] = useState("");

function changeColor(e) {
  let newColor = e
  setColor(newColor)
}
  return (
    <div id='color'>
    <section className="small example">
      <HexColorPicker className='react-colorfull' onChange={changeColor} />
    </section>
    </div>  
    
  )
}


