import React, { useState } from "react";
import PastEvents from "./PastEvents";
import FutureEvents from "./FutureEvents";
import About from "./About";


function Events() {
  const [selected, setSelected] = useState({component:<FutureEvents/>,id:"future"});
  return (
    <div id="events" className="container container-fluid my-5 about-container">
      <div className="about-body-container">
        <p className="display-5 my-5" style={{textAlign:"center"}}>Events</p>

        <div className="about-nav" style={{marginTop:'0px'}}>
          <div 
            className={`about-nav-items ${selected.id==="past" ? "active" : ""}`}
            onClick={()=>{setSelected({component:<PastEvents/>,id:"past"})}}
          >
            Past
          </div>

          {/* <div 
            className={`about-nav-items ${selected.id==="current" ? "active" : ""}`}
            onClick={()=>{setSelected({component:<CurrentEvents/>,id:"current"})}}
          >
            Current
          </div> */}

          <div 
            className={`about-nav-items ${selected.id==="future" ? "active" : ""}`}
            onClick={()=>{setSelected({component:<FutureEvents/>,id:"future"})}}
          >
            Upcoming
          </div>

        </div>

        

        <div className="about-content-container">
          {selected.component}
        </div>
        <About/>
      </div>

    </div>
  );
}


export default Events;
