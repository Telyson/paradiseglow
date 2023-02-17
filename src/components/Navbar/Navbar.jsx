import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import { BiMenuAltRight } from 'react-icons/bi';



export default function Navbar({toggleDisplay}) {
  return (
    <div className="n-wrapper" id='Navbar'>

        <div className="n-left">
            <div className="n-name">
                <h3>PARADISE</h3>
            </div>
            {/* <Toggle /> */}
        </div>

        <div className="n-right">
            <div className="n-list">
                <ul>
                    <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    
                    </Link>
                    <Link spy={true} to='About' smooth={true} >
                    <li>About Me</li>
                    
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Portfolio</li>
                    
                    </Link>
                    <Link spy={true} to='Reviews' smooth={true} >
                    <li>Reviews</li>
                    </Link>

                    <Link spy={true} to='Contact' smooth={true} >
                    <li>Contact</li>
                    </Link>

                    {/* <Link spy={true} to='Footer' smooth={true} >
                    <li>Footer</li>
                    </Link> */}
                    
                </ul>
                
            </div>

            <div className='menubar' onClick={toggleDisplay}>
                <BiMenuAltRight />
            </div>

        </div>
    </div>
  )
}
