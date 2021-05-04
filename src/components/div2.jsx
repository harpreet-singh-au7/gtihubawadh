import img1 from "./images/div2img.jpg";
import "./css/div2.scss";
import "./css/div2android.scss";
import "./css/div2tablet.scss";
import img2 from "./images/schedule.png";
import img3 from "./images/online.png";
import img4 from "./images/resume.png";

function Div2() {
  return (
    <div id="div2">
      <div className="container1">
        <div class="row" id="row2">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img src={img1} className="img-fluid" id="img" />
          </div>
          <div className=" col-md-6 col-sm-12 col-xs-12 col-md-pull-6">
            <p id="p1">
              AWaDH, Technology Innovation Hub at IIT Ropar presents a 6 week
              online certificate course on AI and CPS for agriculture automation
              for employability enhancement of students, recent graduates,
              people working in industry, and faculty members. The course is
              facilitated by faculty members who have extensive experience in
              teaching, research and industry. The course includes 100 contact
              hours for lectures and labs, and 60 hours of capstone project.
            </p>

            <div class="row">
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div class="card">
                  <div class="card-header">
                    <img src={img2} className="img-fluid" id="cardimg" />

                    <p id="cardp">
                      <b> Coures Duration : </b> <p id="cardsub"> 6 weeks </p>
                    </p>

                    <ul>
                      <li> 4 Weeks of Theory</li>
                      <li>2 Weeks of Capstone Project</li>
                      <li> 4 Weeks of Theory</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12">
                <div class="card">
                  <div class="card-header">
                    <img src={img3} className="img-fluid" id="cardimg" />

                    <p id="cardp">
                      <b> Mode </b> <p id="cardsub"> Online </p>
                    </p>

                    <ul>
                      <li>
                        {" "}
                        Hardware and software will be made available to all the
                        participants at their home.{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 col-xs-12">
                <div class="card">
                  <div class="card-header">
                    <img src={img4} className="img-fluid" id="cardimg" />

                    <p id="cardp">
                      <b> Applicants </b> <p id="cardsub"> Limited to 200 </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Div2;
