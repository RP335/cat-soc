import React from 'react';
import { useState } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import { LeftArrow, RightArrow } from './Arrows';
const ImageSlider = (props) =>{
    const  getWidth = () => 50

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout    (resolve, ms));
    }
    const [state, setState] = useState({translate: 0, transition: 0.45});
    const { tr  , transition } = state;
    const getTranslate = () =>{
        console.log(transition);
        if (props.isNext === 1){
            
            if (props.activeIndex === props.slides.length-1)
                return 0;
            else
                return ((props.activeIndex+1)*getWidth());
        }
        else if (props.isNext === 2 ) {


            if (props.activeIndex === 0)
                return (props.slides.length-1)*getWidth();
            else
                return (props.activeIndex-1)*getWidth();
        }
        else
        {
            return (props.activeIndex*getWidth());
        }

    }
    return (
        <div className='image-slider-main' >
            
            <SliderContent  activeIndex = {props.activeIndex} translate ={getTranslate()} transition={transition} width = {getWidth() * props.slides.length} slides = {props.slides}>
            
            </SliderContent>
            
            
            
        </div>
    );
}

export default ImageSlider;