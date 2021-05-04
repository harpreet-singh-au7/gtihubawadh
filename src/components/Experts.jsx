import React from "react";
import experts from "./images/Experts.png";
import expertsMob from "./images/Expertmob.png";
import "./css/instruct.scss";

function Experts() {
  return (
    <div className="instruct">
      {window.innerWidth > 700 ? (
        <img src={experts} className="instruct img-fluid" />
      ) : (
        <img src={expertsMob} className="img-fluid" />
      )}
    </div>
  );
}

export default Experts;
