import { useState } from 'react';

import Slider from "react-slick";
import {Section} from '../index'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'


  
  import './SliderProject.css'
  
  const SliderProject = (props) => {
       const NextArrow =({onClick}) => {
    return(
      <div className='Arrow Next' onClick={onClick}>
        <FiChevronRight/>
      </div>
    )
  }
  const PrevArrow =({onClick}) => {
    return(
      <div className='Arrow Prev ' onClick={onClick}>
        <FiChevronLeft/>
      </div>
    )
  }

  const [logoIndex, setlogoIndex] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    tazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,

    className:"slider"
  };
  const Settings = {
    dots: true,
    infinite: true,
    tazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
 
    beforeChange: (current, next) => setlogoIndex(next)
  };
  return (
  <>
  <Section>
  
    <div className="Front">
    <Slider {...settings}>
   {  props.images.map((image,index) =>  (
          <div key={index} className="Slide carousel-item">
            <img src={image}  />
        
            </div>
        ))}
   </Slider>
    </div>
    <div class="title  text-info-emphasis">
          <h5>Technologies</h5>
         
        </div>
    <div className="front1 ">
    <Slider {...Settings}>
   {  props.logos.map((logo,index) =>  (
          <div key={index} className={ index === logoIndex ? "slide activeSlide" : "slide"}>
            <img src={logo}  />
            </div>
        ))}
   </Slider>
    </div>
  </Section>
     
      </>
    )
  }
  


export default SliderProject