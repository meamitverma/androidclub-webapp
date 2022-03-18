import React from "react";
import "./home.css";

function Home() {
  return (
    <header className="home-background">
      <div className="home-contents">
        <div className="home-description">
          <h1>Welcome! Android club</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum
            doloremque earum expedita vero neque maxime ducimus in. Impedit,
            corrupti omnis possimus a vel veritatis dolorum sunt itaque ullam unde
            quod, enim consectetur vero minus asperiores iusto rem, magni
            voluptatem deleniti dolor non reprehenderit? Facilis eligendi
            veritatis qui aliquid dolorum dolore quisquam at est odio provident?
            Sint ea possimus vitae.
          </h3>
        </div>
        <div className="home-illustration">
          <img src={require("../../assets/images/home_android.png")} alt="android" width={"350px"} height={"350px"} />
        </div>
      </div>
    </header>
  );
}

export default Home;
