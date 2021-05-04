import React from "react";
import instruct from "./images/Instructor.png";
import instructMob from "./images/instructorMob.png";
import "./css/instruct.scss";

function Instructors() {
  return (
    <div className="container1">
      <div id="instruct">
        {window.innerWidth > 700 ? (
          <img src={instruct} className="instruct img-fluid" />
        ) : (
          <img src={instructMob} className="img-fluid" />
        )}
      </div>
    </div>
  );
}

export default Instructors;
