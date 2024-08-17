import React from 'react'
import './About.css'
import image from '../assets/theme_pattern.svg'
import image1 from '../assets/about_profile.svg'
function About() {
    return (
        <div className="about">
            <div className="about-heading">
                <h1>About Me</h1>
                <img className='about-image' src={image} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-section-right">
                    <img className='img' src={image1} alt="Loading..." />
                </div>
                <div className="about-section-left">
                    <p>
                        I am an experienced Frontend Developer with over a decade of professional experstise in the field. Throughout my career, I have had the privilege of collaborating with prestiggious organizastions, contributing to their success and growth.
                    </p>
                    <br />
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    <div className="skills">
                        <div className="skillname"><span>HTML & CSS</span><hr  className='a1'  /></div>
                        <div className="skillname"><span>React JS</span> <hr    className='a2'  /></div>
                        <div className="skillname"><span>C++</span> <hr   className='a3'   /></div>
                        <div className="skillname"><span>JavaScript</span> <hr   className='a4'  /></div>
                    </div>
                </div>
            </div>
            <div className="achievements">
                <div className="achievement-name"><h1>10+</h1>  <span>YEARS OF EXPERIENCE</span> </div>
                <hr />
                <div className="achievement-name"><h1>90+</h1>  <span>PROJECTS COMPLETED</span> </div>
                <hr />
                <div className="achievement-name"><h1>15+</h1>  <span>HAPPY CLIENTS</span> </div>
            </div>
        </div>
    )
}

export default About
