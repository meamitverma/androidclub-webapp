import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css'
import Events from "./components/Events";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return <React.Fragment>
        <Navbar/>
        <Home/>
        <Events/>
    </React.Fragment>;
}

export default App;
