import React from "react";
import "./css/button.scss";

function Button() {
  return (
    <div className="button">
      <div id="container7">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xs-12">
            <p id="para"> Applications to the program are open!</p>
          </div>
          <div className="col-sm-12 col-md-6 col-xs-12">
            <button className="btn btn-danger"> Apply Now </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
