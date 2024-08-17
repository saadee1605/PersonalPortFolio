import React, { useState } from 'react'
import './MyWork.css'
import image from '../assets/theme_pattern.svg'
import mywork from '../assets/mywork_data'
import image1 from '../assets/arrow_icon.svg'
import AdditionalWork from './AdditionalWork'
function MyWork() {
    const [isShow, setShow] = useState(false)
    const[button,setButton]=useState('Show More')
    const showMore = () => {
        button==='Show More'?setButton('Show Less'):setButton('Show More')
        setShow(!isShow)
    }
    return (
        <div className='mywork'>
            <div className="mywork-heading">
                <h1>My Latest Work</h1>
                <img className='mywork-image' src={image} alt="" />
            </div>
            <div className="mywork-container">
                {mywork.map((work, index) => {
                    return <div className="work" key={index} >
                        <h2>{work.w_no}</h2>
                        <h1>{work.w_name}</h1>
                        <img className='work-img' style={{ borderRadius: "10px" }} src={work.w_img} alt="" />
                    </div>
                })}
            </div>
            <div className='showmore' onClick={showMore}>
                <span>{button}</span>  <img src={image1} alt="" />
            </div>
            <div>
                {isShow &&
                    <AdditionalWork />
                }
            </div>
        </div>
    )
}

export default MyWork
