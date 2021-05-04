import React from "react";
import schedule from "./images/scheduleimg.png";
import "./css/div7.scss";
import scheduleMob from "./images/scheduleMob.png";
function Div7() {
  return (
    <div className="div7" id="scheduleC">
      <div id="container1">
        {window.innerWidth > 800 ? (
          <img src={schedule} className="sch_image img-fluid" />
        ) : (
          <img
            src={scheduleMob}
            style={{ marginTop: "36rem" }}
            className="sch_image img-fluid"
          />
        )}
      </div>
    </div>
  );
}

export default Div7;
