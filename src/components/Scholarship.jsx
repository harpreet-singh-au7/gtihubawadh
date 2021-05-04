import React from "react";
import "./css/scholarLim.scss";

function Scholarship_lim() {
  return (
    <div id="scholar_lim">
      <div id="container1">
        <div id="leftcol">
          <h1>Limited number of scholarships for meritorious students</h1>
        </div>
        <div id="container2">
          <ul>
            <li>
              {" "}
              Rs.25,000/- discount in the fees will be given as a scholarship.
            </li>
            <li>
              Scholarship criteria: current CGPA {">"} 8.5 or percentage {">"}{" "}
              80%
            </li>
            <li>
              Scholarships will be given on first come first served basis{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scholarship_lim;
