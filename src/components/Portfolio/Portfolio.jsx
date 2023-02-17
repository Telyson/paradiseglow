import React from 'react'
import './Portfolio.css'
import pic4 from '../../img/pic4.JPG'
import pic5 from '../../img/pic5.JPG'
import pic6 from '../../img/pic6.JPG'
import pic8 from '../../img/pic8.JPG'
import pic9 from '../../img/pic9.JPG'
import pic10 from '../../img/pic10.jpg'
import pic11 from '../../img/pic11.jpg'
import pic12 from '../../img/pic12.JPG'
import pic13 from '../../img/pic13.JPG'
import pic14 from '../../img/pic14.JPG'
import pic16 from '../../img/pic16.JPG'

export default function Portfolio() {
  return (
    <div className='portfolio' id='Portfolio'>
        <h2>PORTFOLIO</h2>
        <div className="portfolio-img">
            <div className="port-group">
                <img src={pic12} alt="pic12" />
                <img src={pic8} alt="pic8" />
                <img src={pic9} alt="pic9" />
            </div>

            <div className="port-group">
                <img src={pic10} alt="pic10" />
                <img src={pic11} alt="pic11" />
                <img src={pic16} alt="pic16" />
            </div>

            <div className="port-group">
                <img src={pic4} alt="pic4" />
                <img src={pic13} alt="pic13" />
                <img src={pic14} alt="pic14" />
            </div>
            
            </div>
    </div>
  )
}
