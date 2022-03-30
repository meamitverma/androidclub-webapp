import React from "react";

function Footer() {
  const instagram_link = "https://www.instagram.com/androidclub.vitb/";

  return (
    <div className="footer-container">
      <div  className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
          <a
              href="#"
              target="_"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                src={require("../assets/images/android_black.png")}
                alt="android logo "
                width={35}
              />
            </a>
            <a
              href="https://vitbhopal.ac.in/"
              target="_"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                src="https://www.mpnvva.in/Image/UniversityLogo?instituteID=35"
                alt="VIT Bhopal"
                width={85}
              />
            </a>
            <span className="text-muted">© 2022 Android Club</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href={instagram_link} target="_">
                <img
                  src="https://img.icons8.com/ios/2x/000000/instagram-new.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
              <a class="text-muted mx-2" href="https://www.linkedin.com/company/android-club-vit-bhopal/mycompany/" target="_">
                <img
                  src="https://img.icons8.com/ios/344/linkedin.png"
                  alt=""
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
