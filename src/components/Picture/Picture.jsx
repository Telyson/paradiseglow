import React from 'react'
import './Picture.css'
import pic1 from '../../img/pic1.webp'

export default function Picture() {
  return (
    <div className='pictback'>
        <img style={{objectFit: 'cover'}} src={pic1} alt="pic1" />
    </div>
  )
}
