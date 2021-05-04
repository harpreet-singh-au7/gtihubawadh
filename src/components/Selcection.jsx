import React from "react";
import selec from "./images/selection.png";
import selecMob from "./images/selectionMob.png";
import "./css/instruct.scss";

function Selection() {
  return (
    <div className="instruct">
      {window.innerWidth > 700 ? (
        <img src={selec} className="instruct img-fluid" />
      ) : (
        <img src={selecMob} className="img-fluid" />
      )}
    </div>
  );
}

export default Selection;
