import React from "react";
import twitter from "./images/3.png";
import linkedin from "./images/4.png";
import support from "./images/8.png";

function Footer() {
  return (
    <div className="footer">
      <span>&#169;</span>
      <span>Kuliza Technologies</span>
      <img src={twitter} alt="twitter-logo"></img>
      <img src={linkedin} alt="linkedin-logo"></img>
      <img src={support} alt="support-logo"></img>
    </div>
  );
}

export default Footer;
