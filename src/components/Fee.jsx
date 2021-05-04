import React from "react";
import fee from "./images/FeeC.png";
import feemob from "./images/FeeMob.png";
import "./css/instruct.scss";

function Fee() {
  return (
    <div className="instruct tp" id="fee">
      {window.innerWidth > 700 ? (
        <img src={fee} className="instruct img-fluid" />
      ) : (
        <img src={feemob} className="img-fluid" />
      )}
    </div>
  );
}

export default Fee;
