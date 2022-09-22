import React from 'react';
import  LeftArrowImg  from '../assets/Arrows/left-arrow.svg'
import RightArrowImg from '../assets/Arrows/right-arrow.svg'
const LeftArrow = ({ handleClick}) => {
    return (
        <div onClick = {handleClick} className ='left-arrow-icon'style ={{display: 'flex', position: 'absolute', left: '25px', top:'50%',
          height: '10%', width: '3.1%', justifyContent:' center', background: 'white',
        borderRadius: '50%', cursor: 'pointer', alignItems: 'center',
        transition: 'transform ease-in 0.1s',
        }}>
            <img src = { LeftArrowImg }></img>
        </div>
    )
}
const RightArrow = ({ handleClick}) => {
    return (
        <div onClick = {handleClick} className ='right-arrow-icon'style ={{display: 'flex', position: 'absolute', right: '25px', top: '50%',
        right: '25px', height: '10%', width: '3.1%', justifyContent:' center', background: 'white',
        borderRadius: '50%', cursor: 'pointer', alignItems: 'center',
        transition: 'transform ease-in 0.1s',
        }}>
            <img src = { RightArrowImg }></img>
        </div>
    )
}
export { LeftArrow, RightArrow } ;

