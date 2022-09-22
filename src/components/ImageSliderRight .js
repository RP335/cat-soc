import React from 'react';
import { useState } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
const ImageSliderRight = (props) =>{
    const  getWidth = () => 50

    const [state, setState] = useState({translate: 0, transition: 0.45});
    const {  transition } = state;
    const arr = props.slides;
    const temp1 = arr.slice(1, arr.length);
    const temp2 = arr.slice(0, 1);
    const res = [...temp1, ...temp2];
    const getTranslate = () =>{
        console.log(transition);
        if (props.isNext === 1){
            if (props.activeIndex === props.slides.length-1)
                return 0;
            else
                return ((props.activeIndex+1)*getWidth());
        }
        else if (props.isNext === 2) {
            if (props.activeIndex === 0)
                return (props.slides.length-1)*getWidth();
            else
                return (props.activeIndex-1)*getWidth();
        }
        else
            return (props.activeIndex*getWidth());

    }
    return (
        <div onClick = {props.handleClick} className='image-slider-side' >
            <SliderContent activeIndex= {props.activeIndex} translate ={getTranslate()} transition={transition} width = {getWidth() * props.slides.length} slides = {res}>
            </SliderContent>
        </div>
    );
}

export default ImageSliderRight;