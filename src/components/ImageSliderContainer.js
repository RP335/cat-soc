import React from 'react';
import ImageSliderLeft from './ImageSliderLeft';
import ImageSlider from './ImageSlider';
import ImageSliderRight from './ImageSliderRight ';
import { useState } from 'react';
import { LeftArrow, RightArrow } from './Arrows';
const ImageSliderContainer = (props) =>{
    const [index, setIndex] = useState(0);
    const [isNext, setIsNext] = useState(0);
    const nextSlide = () => {
        setIsNext(1);
        if (index == props.slides.length-2)
        {
            setIndex(0);
            return;
        }
        setIndex(index+1);
        
        
    }
    const prevSlide = () => {
        
        setIsNext(2);
        if (index == 0){
            setIndex(props.slides.length-1);
            return;
        }
        setIndex(index-1);
    }
    
    return (
        <div className='image-slider-container'>
            

            {/* <ImageSliderLeft    slides = {props.slides} activeIndex = {index} nextSlide ={isNext} ></ImageSliderLeft> */}
            {/* <img src = {props.slides[index]} style ={{overflow: 'hidden'}}></img> */}
            <ImageSlider slides ={props.slides} activeIndex = {index} nextSlide ={isNext}></ImageSlider>
            {/* <ImageSliderRight  slides = {props.slides} activeIndex = {index} nextSlide ={isNext}></ImageSliderRight> */}

            <LeftArrow  handleClick={prevSlide} ></LeftArrow>

            <RightArrow handleClick={nextSlide}></RightArrow>
            
        </div>
    )

}
export default ImageSliderContainer;