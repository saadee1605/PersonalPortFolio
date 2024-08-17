import React from 'react'
import './Footer.css'
import logo from '../assets/logo.svg'

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt="" />
            <div className="footer-content">
                <div className="footer-content-right">
                    <p>I am a frontend developer from, "Your Country" with 10 months of experience in a companies like Microsoft, Tesla and Apple.</p>
                    <hr />
                    <span><i class="fa-regular fa-copyright"></i> 2024 "Your Name".All rights reserved.</span>
                </div>
                <div className="footer-content-left">
                    <div className="left-upper">
                        <input type="email" id="email" name="email" required  placeholder='Enter your email'/>
                        <span className="subscribe">Subscribe</span>
                    </div>
                    <hr />
                    <div className="upper-right">
                        <span>Terms of Services</span>
                        <span>Privacy Policy</span>
                        <span>Connect with me</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
