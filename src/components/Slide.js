import React from 'react';
import { css } from 'styled-components';

const Slide = ({content}) =>{
    return (
        <div className= 'slide'  >
            <img className = 'slide-image' src ={content}></img>
            
        </div>
    )

}
export default Slide;
