import React from "react";
import Event from "./Event"

function Events() {
  return (
    <div className="events-container">
    <div id="events" className="container container-fluid events">
      <h1>Events</h1>
      <Event title="Event 1" desc="Technical meeting" date="19/03/2022" venue="Old hostel"/>
      <Event title="Event 2" desc="Technical meeting" date="19/03/2022" venue="Old hostel"/>
      <Event title="Event 3" desc="Technical meeting" date="19/03/2022" venue="Old hostel"/>
      <Event title="Event 4" desc="Technical meeting" date="19/03/2022" venue="Old hostel"/>
      <Event title="Event 5" desc="Technical meeting" date="19/03/2022" venue="Old hostel"/>
    </div>
    </div>
  );
}

export default Events;
