import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-logo-container">
       <img className="nav_logo" src={require("../../assets/images/android_white.png")} alt="Android club logo" />
        <h2>Android</h2>
      </div>

       <div className="nav-items">
         <a href="/">Home</a>
         <a href="/">Events</a>
         <a href="/">About</a>
         <a href="/">Contact</a>
       </div>
    </div>
  )
}

export default Navbar;