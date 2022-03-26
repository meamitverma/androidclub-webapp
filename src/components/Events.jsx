import React from "react";
import Event from "./Event";

function Events() {
  return (
    <div className="events-container">
      <div id="events" className="container container-fluid events">
        <h1>Events</h1>
        <div className="row event-item-container">
          <div className="col-md-3">
            <Event
              imageurl="https://i.pinimg.com/564x/23/3d/17/233d1789002252488fd0484597987636--free-android-android-apps.jpg"
              title="Event 3"
              desc="Lorem, ipsodi culpa cumque iure suscipit porro esse!"
              schedule="26 March 2022"
              linktojoin="https://www.instagram.com/androidclub.vitb/"
            />
          </div>
          <div className="col-md-3">
            <Event
              imageurl="https://i.pinimg.com/564x/23/3d/17/233d1789002252488fd0484597987636--free-android-android-apps.jpg"
              title="Event 3"
              desc="Lorem, imet Commodi culpa cumque iure suscipit porro esse!"
              schedule="26 March 2022"
              linktojoin="https://www.instagram.com/androidclub.vitb/"
            />
          </div>
          <div className="col-md-3">
            <Event
              imageurl="https://i.pinimg.com/564x/23/3d/17/233d1789002252488fd0484597987636--free-android-android-apps.jpg"
              title="Event 3"
              desc="Ldi culpa cumque !"
              schedule="26 March 2022"
              linktojoin="https://www.instagram.com/androidclub.vitb/"
            />
          </div>
          <div className="col-md-3">
            <Event
              imageurl="https://i.pinimg.com/564x/23/3d/17/233d1789002252488fd0484597987636--free-android-android-apps.jpg"
              title="Event 3"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa cumque iure suscipit porro esse!"
              schedule="26 March 2022"
              linktojoin="https://www.instagram.com/androidclub.vitb/"
            />
          </div>
          <div className="col-md-3">
            <Event
              imageurl="https://i.pinimg.com/564x/23/3d/17/233d1789002252488fd0484597987636--free-android-android-apps.jpg"
              title="Event 3"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa cumque iure suscipit porro esse!"
              schedule="26 March 2022"
              linktojoin="https://www.instagram.com/androidclub.vitb/"
            />
          </div>
          <div className="col-md-3">
            <Event
              imageurl="https://i.pinimg.com/564x/23/3d/17/233d1789002252488fd0484597987636--free-android-android-apps.jpg"
              title="Event 3"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa cumque iure suscipit porro esse!"
              schedule="26 March 2022"
              linktojoin="https://www.instagram.com/androidclub.vitb/"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
