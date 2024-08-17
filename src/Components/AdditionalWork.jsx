import React from 'react'
import mywork from '../assets/mywork_data'
import './MyWork.css'

function AdditionalWork() {
  return (
    <div>
        <div className="mywork-container"  >
                {mywork.map((work, index) => {
                    return <div className="work" key={index} >
                        <h2>{work.w_no}</h2>
                        <h1>{work.w_name}</h1>
                        <img className='work-img' style={{ borderRadius: "10px" }} src={work.w_img} alt="" />
                    </div>
                })}
            </div>
    </div>
  )
}

export default AdditionalWork
