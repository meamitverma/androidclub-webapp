import React from "react";

function AboutLead() {
  return (
    <div>
      <div className="row">
        <div className="col-md-5">
          <div class="card">
            <img
              src="https://brighterwriting.com/wp-content/uploads/icon-user-default.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Rohan de Sarkar</h5>
              <p class="card-text">Secretary</p>
              <a href="#" class="btn btn-primary">
                todo
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div class="card">
            <img src="https://brighterwriting.com/wp-content/uploads/icon-user-default.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tamanna</h5>
              <p class="card-text">Secretary</p>
              <a href="#" class="btn btn-primary">
                todo
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutLead;
