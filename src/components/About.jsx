import React, { useState } from "react";
import AboutLeads from "./AboutLeads";
import AboutMembers from "./AboutMembers";

function About() {
  const [isLeadSelected, setIsLeadSelected] = useState(true);

  return (
    <div id="about" className="container container-fluid my-5 about-container">
      <div className="about-body-container">
        <p className="display-3 my-5">About</p>
        <div className="about-nav">
          <div className={`about-nav-items ${isLeadSelected ? "active" : ""}`} onClick={()=>{setIsLeadSelected(true)}}>
            Lead
          </div>
          <div className={`about-nav-items ${isLeadSelected ? "" : "active"}`} onClick={()=>{setIsLeadSelected(false)}}>
            Members
          </div>
        </div>
        <div className="about-content-container">
          {isLeadSelected ? <AboutLeads /> : <AboutMembers />}
        </div>
      </div>
    </div>
  );
}

export default About;
