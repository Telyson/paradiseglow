import React from 'react'
import './DisplayMenu.css'
import {Link} from 'react-scroll'

export default function DisplayMenu() {
  return (
    <div className='displaymenu'>
        <ul className='displayList'>
            <Link spy={true} to='Intro' smooth={true} activeClass='activeClass'>
            <li>Home</li>
            
            </Link>
            <Link spy={true} to='Services' smooth={true} >
            <li>About Me</li>
            
            </Link>
            <Link spy={true} to='Experience' smooth={true} >
            <li>Services</li>
            
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} >
            <li>Portfolio</li>
            
            </Link>
            <Link spy={true} to='Testimonials' smooth={true} >
            <li>Reviews</li>
            </Link>

            <Link spy={true} to='Testimonials' smooth={true} >
            <li>Contact</li>
            </Link>
            
        </ul>
    </div>
  )
}
