import React from 'react'
import Member from '../Member'

function Android() {
  return (
    <div>
    <div className="row">
      <div className="col-md-2">
        <Member
          profile_img_link=""
          title="Harsh Verma"
          pos="Frontend"
          insta_link="https://www.instagram.com/rohan_sarkarr/"
        />
      </div>

      <div className="col-md-2">
      <Member
          profile_img_link=""
          title="Raghav Sharma"
          pos="Backend"
          insta_link="https://www.instagram.com/androidclub.vitb/"
        />
      </div>

      <div className="col-md-2">
      <Member
          profile_img_link=""
          title="Rohan de Sarkar"
          pos="Backend"
          insta_link="https://www.instagram.com/rohan_sarkarr/"
        />
      </div>

    </div>
  </div>
  )
}

export default Android