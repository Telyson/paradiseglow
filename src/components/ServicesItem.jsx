import React from 'react'
import './Services/Services.css'
// import pic9 from '../img/pic9.JPG'


export default function ServicesItem({img1, title, para}) {
  return (

        // <div className='services-main'>

            <div className="services-item">
                <img src={img1} alt="pic9" />
                <h3  className="title">
                    {title}
                </h3>
                <p  className="para">
                    {para}
                </p>
            </div>
        // </div>
  )
}
