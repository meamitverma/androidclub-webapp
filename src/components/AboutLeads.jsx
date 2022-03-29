import React from "react";
import Member from "./Member";

function AboutLead() {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Member
            profile_img_link=""
            title="Rohan de Sarkar"
            pos="Secretary"
            insta_link="https://www.instagram.com/rohan_sarkarr/"
          />
        </div>

        <div className="col-md-2">
        <Member
            profile_img_link=""
            title="Tamanna"
            pos="Secretary"
            insta_link="https://www.instagram.com/androidclub.vitb/"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutLead;
