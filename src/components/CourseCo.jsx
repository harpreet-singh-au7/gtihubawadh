import React from "react";
import sir from "./images/Goyalsir.jpg";
import "./css/course.scss";
function CourseCo() {
  return (
    <div className="course">
      <div className="col-md-6 col-sm-12 col-xs-12">
        <h1>Course Co-Ordinator</h1>

        <img src={sir} className="img-fluid wd" />
      </div>
      <div className="dsc col-md-7 col-sm-11 col-xs-11">
        <h2>Prof. Neeraj Goel,</h2>
        <p>
          {" "}
          Assistant Professor, Department of Computer Science {"&"} Engineering
          Domain Head - Precision Agriculture,
          <br /> iHub - AWaDH (Agriculture {"&"} Water Technology Development
          Hub)
        </p>
        <br />

        <p>Indian Institute of Technology Ropar, Rupnagar - 140 001, Punjab</p>

        <br />

        <p>
          #218, S. Ramanujan Block, Permanent campus, Indian Institute of
          Technology Ropar, Rupnagar - 140 001, Punjab <br /> Phone: 01881-23
          2161 | Email: neeraj{"@"}iitrpr.ac.in
        </p>
      </div>
    </div>
  );
}

export default CourseCo;
