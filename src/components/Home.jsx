import React from "react";

function Home() {
  return (
    <div id="home" className="container">
      <div className="home-content">
        <h2>Welcome to Android club</h2>
        <p className="home-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          reiciendis quibusdam provident ipsum reprehenderit? Repellendus quasi
          dolores eos consectetur reiciendis quas. Impedit, perferendis. Sint
          possimus repellendus soluta laboriosam libero eveniet?
        </p>
        <img className="img-fluid" src={require("../assets/images/home_illustratation.png")} alt="" />
      </div>
    </div>
  );
}

export default Home;
