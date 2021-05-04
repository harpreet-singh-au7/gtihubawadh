import React from "react";
import img6 from "./images/div5_p2.jpg";
import "./css/Div5_p2.scss";
import "./css/Div5_p2android.scss";
import "./css/Div5_p2tablet.scss";

function Div5_p2() {
  return (
    <div id="Div5_p2">
      <div class="row" id="row2">
        <div className="container1">
          <div id="abt_col" className=" col-md-5 col-sm-11 col-xs-11">
            <p id="para2">
              Prime objective of AWaDH is technology intervention in the domain
              of Agriculture and Water through the deployment of CPS. The R & D
              domains of the hub are:
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div id="container2">
              <ul>
                <li>
                  {" "}
                  Water/industry discharge assessment, treatment, and management
                </li>
                <li>Advancement of land resources and farm preparation.</li>
                <li>Agriculture automation and precision farming. </li>

                <li>CPS in harvesting and post-harvesting. </li>
                <li>
                  {" "}
                  The application of the Internet of Things (IoT) in the domain
                  of Agriculture and Water
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 img-fluid2">
            <img src={img6} className="img-fluid" id="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Div5_p2;
