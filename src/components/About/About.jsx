import React from 'react'
import './About.css'
import pic14 from '../../img/pic5.JPG'

export default function About() {
  return (
    
    <div className='about' id='About'>
        <h2>About Me</h2>
        <div className="about-content">

            <div className="about-write">

              <p>
                Hi, I’m Paradise.
                Student of the University of Port Harcourt, and A Port Harcourt makeup artist.
                I started Makeup as a skill but now it is a hobby for me I love everything about makeup the process the finish stage and the happiness I always leave on a client's face.
                I See Makeup beyond the regular thing we do, I see it as art.
                
              </p>
              <p>
                Paradisegloss_n_glam Started November 20th, 
                2020 when I was on Instagram going through some 
                artwork then I came to the conclusion why not start 
                up a makeup business since I love colors and art so much.
                Well, Paradisegloss_n_glam is just a little business, for now, 
                I work mostly with my client and some photographers to create amazing works.
              </p>
            </div>

            <div className="about-pict">
                <img src={pic14} alt="pic14" />
            </div>
        </div>
    </div>
    
  )
}
