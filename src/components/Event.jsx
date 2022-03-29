import React from "react";

function Event(props) {
  const max_desc_length = 55;

  return (
    <div className="card-container">
      <div className="card event">
        <img src={props.imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <p
            className="card-title"
            style={{ fontSize: "20px", fontWeight: "470" }}
          >
            {props.title}
          </p>
          <p className="card-text">
            {props.desc.length > max_desc_length
              ? props.desc.substr(0, max_desc_length) + "..."
              : props.desc}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item ">
            <div className="event-register-container">
              <div> {props.schedule}</div>
              <div className="event-register-btn">
                <a
                  href={props.linktojoin}
                  target="_"
                  className="btn btn-sm btn-primary"
                >
                  Register
                </a>
              </div>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Event;
