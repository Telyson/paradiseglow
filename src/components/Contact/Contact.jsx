import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export default function Contact() {

    const form = useRef();
    const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3m99fg', 'template_uesfsgp', form.current, 'w-8mAXV0YNffYON_l')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };


  return (

    <div className='contact' id='Contact'>
        <div className="c-left">
            <h2>Touch Base</h2>
            <p>Be in touch to book a free makeup consultation!</p>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type="submit" value='Send' className='button' />
                <span className='succesMail'>{done && "Thanks for contacting me...!"}</span>
            </form>
        </div>


    </div>
  )
}
