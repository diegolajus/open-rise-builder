import React, { useState } from 'react';
import '../Styles/legend.scss'

const Legend = ({color}) => {

    const [inputList, setInputList] = useState([]);

    function selectHand(e){
        let bgColor = e.target.style
        if ( bgColor.backgroundColor === '') {
            bgColor.backgroundColor = color
        } else if ( bgColor.backgroundColor = color ) {
            bgColor.backgroundColor = ''
        }
    }

    return (
        <div className='situation-container'>
            <a onClick={selectHand} className='noselect' contentEditable='true' href="#">UTG</a>
            <a onClick={selectHand} className='noselect' contentEditable='true' href="#">MP</a>
            <a onClick={selectHand} className='noselect' contentEditable='true' href="#">CO</a>
            <a onClick={selectHand} className='noselect' contentEditable='true' href="#">BTN</a>
            <a onClick={selectHand} className='noselect' contentEditable='true' href="#">SB</a>
        </div>
    );
}

export default Legend;
