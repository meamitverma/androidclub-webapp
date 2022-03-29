import React from "react";

function Footer() {
  
  const instagram_link = "https://www.instagram.com/androidclub.vitb/";

  return (
    <div className="footer-container">
      <div id="footer" className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></a>
            <span className="text-muted">© 2022 Android Club</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">

            <li class="ms-3">
              <a class="text-muted" href={instagram_link} target="_">
                <img src="https://img.icons8.com/ios/2x/000000/instagram-new.png" alt="" width={24} height={24} />
              </a>
            </li>

          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
