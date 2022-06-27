import React from "react";

function Navigation() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("./images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="navi-bar">
      <div className="nav-item">
        <img src={images["12.png"]} alt="Home icon"></img>
        <span>Home</span>
      </div>
      <div className="nav-item">
        <img src={images["7.png"]} alt="call list icon"></img>
        <span>CallLists</span>
      </div>
      <div className="nav-item">
        <img src={images["9.png"]} alt="contacts icon"></img>
        <span>Contacts</span>
      </div>
      <div className="nav-item">
        <img src={images["18.png"]} alt="reports con"></img>
        <span>Reports</span>
      </div>
      <div className="nav-item">
        <img src={images["14.png"]} alt="My Session icon"></img>
        <span>My Session</span>
      </div>
      <div className="nav-item call-me">
        <img src={images["15.png"]} alt="call me icon"></img>
        <span>Call Me</span>
      </div>
      <div className="nav-item">Dail:+91 7893268967</div>
      <div className="nav-item">Agent 224-233</div>
      <div className="nav-item">Pass-2-630-913</div>
      <div className="nav-item">
        <img src={images["19.png"]} alt="search icon"></img>
      </div>
      <div className="nav-item">
        <span>Anirudh Chan</span>
        <img src={images["1.png"]} alt="down-arrow"></img>
      </div>
    </div>
  );
}

export default Navigation;
