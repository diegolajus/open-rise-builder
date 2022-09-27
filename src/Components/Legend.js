import React, { useState } from 'react';
import '../Components/legend.scss'

const Legend = ({color}) => {

    const [inputList, setInputList] = useState([]);


    function selectHand(e){
        let bgColor = e.target.style
        if ( bgColor.backgroundColor === '') {
            localStorage.setItem(e.target.textContent,color)
            bgColor.backgroundColor = localStorage.getItem(e.target.textContent)
        } else if ( bgColor.backgroundColor = color ) {
            bgColor.backgroundColor = ''
        }
    }

    return (
        <div className='situation-container'>
            <a onClick={selectHand} className='noselect' href="#">UTG</a>
            <a onClick={selectHand} className='noselect' href="#">MP</a>
            <a onClick={selectHand} className='noselect' href="#">CO</a>
            <a onClick={selectHand} className='noselect' href="#">BTN</a>
            <a onClick={selectHand} className='noselect' href="#">SB</a>
        </div>
    );
}

export default Legend;