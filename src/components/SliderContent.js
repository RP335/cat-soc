import React from 'react';
import { css } from 'styled-components';
import LeftArrow from './Arrows';
import Slide from './Slide';
import { Carousel } from 'antd';
const SliderContent =(props) =>{
    return (
        <div autoplay className = 'slider-content' style ={{ transform: `translateX(-${props.translate}vw)`, transition: '0.45s', width: '100%',
         height: '66%', display: 'flex', overflow: 'hidden'}}>
            
            {/* <Slide isMain = {props.isMain} index ={props.activeIndex} content ={props.slides[props.activeIndex]}></Slide> */}
            {props.slides.map((slide, i) => (<div className= 'slide'  style ={{ width: '100%', objectFit: 'cover' }}>
            <img className = 'slide-image' src ={slide}></img>
            
        </div>))}
        </div>
    )
}

export default SliderContent;