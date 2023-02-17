import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'

export default function Footer() {
  return (
    <div id='Footer'>
        <h4>Paradisekenude@gmail.com</h4>
        <a className='icon' href="https://instagram.com/paradisegloss_n_glam?igshid=YmMyMTA2M2Y="><Insta color='green' size='2rem' /></a>
        <a href=""><Facebook color='green' size='2rem' /></a>
        <p>&copy; Copyright 2023</p>
    </div>
  )
}
