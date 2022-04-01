import React, {useState, useEffect} from "react";

function Navbar() {
  
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 50){
        handleShow(true);
      }else handleShow(false);
    });
  
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])
  
  
  return (
    <React.Fragment>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-light ${show && "bg-light"}`}>
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <img
              src={require("../assets/images/android_black.png")}
              alt=""
              width="54"
              height="50"
            />
            Android club
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#events">
                  Events
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">
                  Team
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
