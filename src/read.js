import React from "react";
import viewmore from "./images/11.png";
import mic from "./images/17.png";
import play from "./images/16.png";

function Read() {
  return (
    <div>
      <div className="heading">
        <h3>Readings from top Reps in your company</h3>
        <div className="view-more">
          <img src={viewmore} alt="view more icon"></img>
          <span>
            <a href="#">view more</a>
          </span>
        </div>
      </div>
      <div className="read-container">
        <div className="thumbnail">
          <img src={mic} alt="mic icon"></img>
        </div>
        <div className="read-list">
          <div className="read-list-item one">
            <span className="number">1</span>
            <span className="play">
              <img src={play}></img>
              <span>Play</span>
            </span>
            <span>
              <strong>Roger Griffin</strong> Spoke to Liam Henry, VP
              infrastructure from Oracle for 6 minutes 20 seconds and booked a
              meeting for Wednesday, 30th March
            </span>
          </div>
          <div className="read-list-item two">
            <span className="number">2</span>
            <span className="play">
              <img src={play}></img>
              <span>Play</span>
            </span>
            <span>
              <strong>Amy Stevenson</strong> Spoke to Shanon Parker, Program
              manager from Microsoft for 5 mins 45 seconds and scheduled a
              follow up call for Thursday, 31st March
            </span>
          </div>
          <div className="read-list-item three">
            <span className="number">3</span>
            <span className="play">
              <img src={play}></img>
              <span>Play</span>
            </span>
            <span>
              <strong>Andrew Osborne</strong> Spoke to Kevin Cooper, CTO from
              Kickstart for 5 mins 15 seconds and booked a meeting for Firday,
              1st April
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
