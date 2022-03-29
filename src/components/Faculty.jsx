import React from 'react'

function Faculty(props) {
  return (
    <div className="about-faculty-container">
        <div >
            <img className="faculty-profile-img" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=282" alt="Sandeep Mal" width={100} height={100} />
        </div>

        <div className="faculty-about">
            
            <div className="faculty-title">
                {props.title}
            </div>
            
            <div className="faculty-desc">
                {props.desc}
            </div>

            <div className="faculty-pos">
                {props.pos}
            </div>
        </div>

       
    </div>
  )
}

export default Faculty