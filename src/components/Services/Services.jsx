import React from 'react'
import ServicesItem from '../ServicesItem'
import './Services.css'
import pic9 from '../../img/pic9.JPG'
import pic8 from '../../img/pic8.JPG'
import pic12 from '../../img/pic12.JPG'

export default function Services() {
  return (
    <div className='services' id='Services'>
        <h2>SERVICES</h2>
        <div className="services-group">
        <ServicesItem 
            img1={pic9}
            title ="EVENTS"
            // para="I'm a paragraph. Click here to add your own text and edit me."
        />

        <ServicesItem 
            img1={pic8}
            title ="CREATIVE"
            // para="I'm a paragraph. Click here to add your own text and edit me."
        />

        <ServicesItem 
            img1={pic12}
            title ="FASHION"
            // para="I'm a paragraph. Click here to add your own text and edit me."
        />

        </div>
        
    </div>
  )
}
