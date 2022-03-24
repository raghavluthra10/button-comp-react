import React from 'react';
import './ButtonComp.css';


const TYPES = [ 'primary', 'secondary' ]
const SIZES = [ 'narrow', 'wide' ]

const ButtonComp = ({ text, btnType, onClick, btnSize }) => {

    const checkButtonType = TYPES.includes(btnType) ? btnType : TYPES[0];
    const checkButtonWidth = SIZES.includes(btnSize) ? btnSize : SIZES[0];

    return (
        <div onClick={onClick} className={` btn ${checkButtonType} ${checkButtonWidth} `}>
            {text}
        </div>
    )
}

export default ButtonComp
