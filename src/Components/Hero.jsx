import React from 'react'
import './Hero.css'
import image from '../assets/profile_img.svg'
function Hero() {
    return (
        <div>
            <div className="hero">
                <img className='hero-image' src={image} alt="" />
                <h1 className='hero-heading' ><p>Hi I'm "Your Name",</p> front end developer based in "Your Country".</h1>
                <p className='hero-paragraph' >I am a frontend developer from "Your City", "Your Country" with 1 year of experience in Web-Development.I have served in multiple companies.</p>
                <div className='hero-connect' >
                    <span className='hero-connect-one'  >Connnect with me</span>
                    <span className='hero-connect-two' >My resume</span>
                </div>
            </div>
        </div>
    )
}

export default Hero
