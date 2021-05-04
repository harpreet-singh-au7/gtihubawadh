import img1 from "./images/whycourse.jpg";
import img2 from "./images/steps.jpg";
import "./css/div3.scss";
import "./css/div3android.scss";

import "./css/div4.scss";

function Div4() {
  return (
    <div id="div4">
      <div id="container1">
        <h2 id="heading1"> Why This Course?</h2>
        <p id="para1">
          We witness great advances on Artificial Intelligence (AI) and
          Cyber-Physical Systems (CPS), and consequently a large number of
          courses/training programs are introduced with focus on machine
          learning (ML) tools. In practice, these algorithms need to be
          supported by system-level interdisciplinary knowledge.
          <br></br>
          <br></br>
          This course provides the necessary interdisciplinary background
          required to build an end-to-end system, including programming,
          embedded systems, data sciences, machine learning, deep learning,
          communication technologies, and android programming. The course
          focuses on bridging the gap between academia and industry by providing
          hands-on training in the area of AI and CPS in the domain of
          agriculture. The topics in this course will be taught in such a way
          that the expertise gained is not limited to agriculture domain but it
          can be applied to design systems for other domains, such as;
          healthcare, surveillance, home automation, industry 4.0, society 5.0,
          etc.
        </p>
      </div>

      <div id="container5">
        <img src={img1} id="img" />
      </div>

      <div id="container6">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div id="container2">
              <h2 id="heading2">Why Agriculture Applications?</h2>
              <p id="para2">
                Growth of Indian economy depends on the agriculture sector,
                since 60% of the population is engaged in agriculture related
                activities. Recent advancements in AI and CPS can help in
                productivity and yield in agriculture. A report suggests the AI
                market will increase to US$1.1 billion by 2025, with annual
                growth of more than 20%. These technologies can help farmers
                increase their income by US$9 billion. Therefore, increasing the
                contribution of agriculture in GDP and helping farmers to
                increase their standard of living.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div id="container2">
              <h2 id="heading2">Why Agriculture Applications?</h2>
              <p id="para2">
                The course provides you hands-on experience in cyber-physical
                systems/internet of things, machine learning, artificial
                intelligence, and android development.
                <br></br>
                <br></br>
                By the end of this course, you will be able to design an
                application that takes data from electronic devices and sensors
                in the field, and uses machine learning algorithms in the
                backend.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div id="container3">
              <img src={img2} id="img" />
            </div>
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12">
            <div id="container2">
              <ul>
                <li>
                  {" "}
                  Hardware kit with all components to perform lab experiments
                  will be given as part of registration
                </li>
                <li>
                  Free access to IIT Ropar iHub - AWaDH cloud during the course
                  period.
                </li>
                <li>40 hours of lectures by experts of the field.</li>

                <li>40-60 hours of lab in live interaction format.</li>
                <li>
                  {" "}
                  60 hours of capstone project in the guidance of a faculty
                  member.
                </li>
                <li> Lectures will focus on practical aspects.</li>
                <li> 6 lectures from eminent professors/scientists.</li>
                <li>
                  Practical knowledge assessment at the end of the course.
                </li>
                <li>A certificate of completion of the course.</li>
                <li>
                  Additionally, a 6 week internship certificate can be issued to
                  the participants.
                </li>
                <li>
                  {" "}
                  If a participant extends the capstone project for 2 more
                  weeks, a 8 week internship certificate can be issued.
                  Extension of the capstone project will be at no additional
                  cost.{" "}
                </li>
              </ul>
            </div>
          </div>

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
      </div>
    </div>
  );
}

export default Div4;
