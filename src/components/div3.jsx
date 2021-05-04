import img1 from "./images/div1img.webp";
import "./css/div3.scss";
import "./css/div3android.scss";

function Div3() {
  return (
    <div id="div3">
      <div id="container3">
        <h2> Eligibility and Prequisite</h2>
        <ul>
          <li>
            Open for UG/PG students of any branch of Engineering and
            professionals from the industry.
          </li>
          <li>
            Attendees should have minimum programming experience in any language
            (C / C++ / Java / Python)
          </li>
        </ul>
      </div>

      <div id="container4">
        <h2> Logistics Requirement</h2>
        <ul>
          <li>
            A laptop/computer with good internet connectivity, microphone and
            webcam.
          </li>
          <li>A quiet place to work</li>
        </ul>
      </div>

      <div id="container5">
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

export default Div3;
