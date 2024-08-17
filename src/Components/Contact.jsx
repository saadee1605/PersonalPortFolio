import React from 'react'
import './Contact.css'
import image from '../assets/theme_pattern.svg'

function Contact() {
  return (
    <div className='contact'>
      <div className="contact-heading">
        <h1>Get In Touch</h1>
        <img className='contact-image' src={image} alt="" />
      </div>
      <div className="make-contact">
        <div className="contact-right">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you wany me to work on. You can contact anytime.</p>
          <div className="contact-info">
            <div className="info"> <i class="fa-solid fa-phone  contacts-sign"></i><span>"Your Number"</span></div>
            <div className="info"> <i class="fa-solid fa-location-dot  contacts-sign"></i><span>"Your City and Country"</span></div>
            <div className="info"><i class="fa-solid fa-envelope  contacts-sign"></i> <span>"Your Gmail"</span></div>

          </div>
        </div>
        <div className="contact-left">
          <form class="contact-form">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder='Enter your name here' />
            </div>
            <div class="form-group">
              <label for="email">Your Email</label>
              <input type="email" id="email" name="email" required placeholder='Enter your email here' />
            </div>
            <div class="form-group">
              <label for="message">Write your message here</label>
              <textarea id="message" name="message" rows="4" required placeholder='Enter your message here' ></textarea>
            </div>
            <button className='contact-button' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
