import React from 'react'
import './Reviews.css'
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Slider {...settings} className="Slider">
        
        <div className='carousel' id='Reviews'>
          <p>
          "ParadiseGlow is the best in the city, I plead with you to book an apointment with her."
          </p>
          <h3>| Serah |</h3>
        </div>

        <div className='carousel'>
          <p>
          "I don't think there is any one better than ParadiseGlow, she is simply the best in the city."
          </p>
          <h3>| Amaka |</h3>
        </div>

        {/* <div className='carousel'>
          <p>
          "I'm a testimonial. Click to edit me and add 
          text that says something nice about you and 
          your services. Let your customers review you 
          and tell their friends how great you are."
          </p>
          <h3>| Serah Jones |</h3>
        </div> */}
        
        
      </Slider>
    );
  }
