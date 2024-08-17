import React from 'react'
import './Services.css'
import servicesData from '../assets/services_data'
import image from '../assets/theme_pattern.svg'
import image1 from'../assets/arrow_icon.svg'
function Services() {
    return (
        <div className='services'>
            <div className="services-heading">
                <h1>Services</h1>
                <img className='services-image' src={image} alt="" />
            </div>
            <div className="services-container">

                {servicesData.map((services, index) => {
                    return <div className="myservices" >
                        
                        <h3>{services.s_no}</h3>
                        <h1>{services.s_name}</h1>
                        <p className='services-p'>
                            {services.s_desc}
                        </p>
                        <div className="readmore"><p>Read More</p><img src={image1} alt="" /></div>
                    </div>
                    
                })}

            </div>
        </div>
    )
}

export default Services
