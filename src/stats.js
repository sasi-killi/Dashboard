import Read from "./read";
import graph from "./images/10.png";
import viewmore from "./images/11.png";
import uparrow from "./images/5.png";
import downarrow from "./images/6.png";

function Stats() {
  return (
    <div>
      <div className="heading">
        <h3>Daily Stats-31st March 2016</h3>
        <div className="view-more">
          <img src={viewmore} alt="view more icon"></img>
          <span>
            <a href="#">view more</a>
          </span>
        </div>
      </div>
      <div className="stats-container">
        <div className="thumbnail">
          <img src={graph} alt="graph icon"></img>
        </div>
        <div className="graph-container">
          <h4>Graph</h4>
          <div>
            <h4>DIALS</h4>
            <div>
              <img src={uparrow} alt="up-arrow"></img>
              <span>Your Goal:1500</span>
              <p>Tip : Franzen pinterest chillwave chicharrones</p>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <h4>Graph</h4>
          <div>
            <h4>DIALS</h4>
            <div>
              <img src={downarrow} alt="up-arrow"></img>
              <span>Your Goal:1500</span>
              <p>Tip : Franzen pinterest chillwave chicharrones</p>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <h4>Graph</h4>
          <div>
            <h4>DIALS</h4>
            <div>
              <img src={uparrow} alt="up-arrow"></img>
              <span>Your Goal:1500</span>
              <p>Tip : Franzen pinterest chillwave chicharrones</p>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <h4>Graph</h4>
          <div>
            <h4>DIALS</h4>
            <div>
              <img src={downarrow} alt="up-arrow"></img>
              <span>Your Goal:1500</span>
              <p>Tip : Franzen pinterest chillwave chicharrones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
