import { useState } from 'react';
import logos from '../../Data/Images'
import Slider from "react-slick";
import './Technologies.css'
import {Section , SectionTitle} from '../index'
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'
const Technologies = () => {

  const NextArrow =({onClick}) => {
    return(
      <div className='arrow next' onClick={onClick}>
        <FaArrowRight/>
      </div>
    )
  }
  const PrevArrow =({onClick}) => {
    return(
      <div className='arrow prev' onClick={onClick}>
        <FaArrowLeft/>
      </div>
    )
  }
  const [imageIndex, setImageIndex] = useState(0)
  const settings = {
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
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current, next) => setImageIndex(next)
  };
  return (
  <>
  <Section>
  <SectionTitle>Technologies</SectionTitle>
    <div className="front">
    <Slider {...settings}>
   {  logos.map((logo,index) =>  (
          <div key={index} className={ index === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={logo}  />
            </div>
        ))}
   </Slider>
    </div>
  </Section>
  </>
  );
}

export default Technologies