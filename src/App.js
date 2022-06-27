import React, { Component } from "react";
import Navigation from "./nav";
import warning from "./images/2.png";
import Read from "./read";
import Stats from "./stats";
import Tips from "./tips";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="warning">
        <img src={warning} alt="warning icon"></img>
        <span>Your browser has disconnected</span>
      </div>
      <Read />
      <Stats />
      <Tips />
      <Footer />
    </div>
  );
}

export default App;
