import React from "react";
import instruct from "./images/Instructor.png";
import instructMob from "./images/instructorMob.png";
import "./css/instruct.scss";

function Instructors() {
  return (
    <div className="instruct">
      {window.innerWidth > 700 ? (
        <img src={instruct} className="instruct" />
      ) : (
        <img src="instruct" className={instructMob} />
      )}
    </div>
  );
}

export default Instructors;
