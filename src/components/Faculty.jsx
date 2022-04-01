import React from "react";
import Member from "./Member";

function Faculty(props) {
  return (
    <div className="about-faculty-container">
      <div className="faculty-wrapper">
        <p className="faculty-title" style={{ textAlign: "center" }}>
          Faculty Coordinator
        </p>

        <div className="faculty-container">
          <div class="card member-container">
            <img
              src="data:image/jpeg;base64,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"
              alt="..."
            />
            <div class="card-body">
              <div style={{ fontWeight: "500", fontSize: "26px" }}>
                Dr. Sandip Mal
              </div>

              <div className="member-desc-wrapper">
                <div className="faculty-pos">Program chair, CSE-Core</div>

                <div className="member-social-link">
                  {/* instagram */}
                  {props.insta_link && (
                    <a href={props.insta_link} target="_">
                      <img
                        src="https://img.icons8.com/fluency/344/instagram-new.png"
                        alt="instagram icon"
                        width={24}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
