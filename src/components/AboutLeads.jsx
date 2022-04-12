import React from "react";
import Member from "./Member";

function AboutLead() {
  return (
    <div className="about-content-container">
      {/* //<div className="row"> */}
        <div className="col-md-2" >
          <Member
            profileimg={require("../assets/profileimg/rohan.jpg")}
            title="Rohan Sarkar"
            pos="Secretary(Technical)"
            insta_link="https://www.instagram.com/rohan_sarkarr/"
          />
        </div>
    
        <div id="lead-nontech" className="col-md-2" >
        <Member
            profileimg={require("../assets/profileimg/tamanna.jpeg")}
            title="Tamanna Kapoor"
            pos="Secretary(Non-Technical)"
            // insta_link="https://www.instagram.com/androidclub.vitb/"
          />
        </div>

      {/* </div> */}
    </div>
  );
}

export default AboutLead;
