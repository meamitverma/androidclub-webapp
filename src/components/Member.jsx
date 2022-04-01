import React from "react";

function Member(props) {
  return (
    <div class="card member-container">
      <img
        src={props.profileimg}
        className="card-img-top"
        alt="..."
      />
      <div class="member-body">
        <div class="faculty-title">{props.title}</div>

        <div className="member-desc-wrapper">
          <div className="faculty-pos">{props.pos}</div>
         
          <div className="member-social-link">
              {/* instagram */}
              {props.insta_link && <a href={props.insta_link} target="_">
                <img
                  src="https://img.icons8.com/fluency/344/instagram-new.png"
                  alt="instagram icon"
                  width={24}
                />
              </a>
              }

          </div>

        </div>
      </div>
    </div>
  );
}

export default Member;
