import React from "react";
import img5 from "./images/div5_1.jpg";
import "./css/div5.scss";
import "./css/div5android.scss";
import "./css/div5tablet.scss";

function Div5() {
  return (
    <div id="Div5">
      <div className="container1">
        <div className="col-md-6 col-sm-11 col-xs-11">
          <div id="leftcol">
            <h1>About the DST iHub - AWaDH</h1>
          </div>
        </div>
        <div class="row" id="row2">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src={img5} className="img-fluid" id="img" />
          </div>
          <div id="abt_col" className=" col-md-5 col-sm-11 col-xs-11">
            <p id="p1">
              iHub – AWaDH is a Technology Innovation Hub established by the
              Department of Science and Technology (DST) – Government of India
              at the Indian Institute of Technology Ropar in the framework of
              National Mission on Interdisciplinary Cyber-Physical Systems (NM -
              ICPS) to improve the overall ecosystem of agriculture in India in
              the line with developed countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Div5;
