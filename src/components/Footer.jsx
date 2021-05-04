import React from "react";
import "./css/footer.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div id="circ">
        <ul>
          <li className="animated zoomIn">
            <div className="back"></div>
            <div className="icon">
              <FacebookIcon style={{ fontSize: "4rem", marginTop: "-3rem" }} />
            </div>
          </li>
          <li className="animated zoomIn delayone">
            <div className="back"></div>
            <div className="icon">
              <InstagramIcon style={{ fontSize: "4rem", marginTop: "-3rem" }} />
            </div>
          </li>
          <li className="animated zoomIn delaytwo">
            <div className="back"></div>
            <div className="icon">
              <YouTubeIcon style={{ fontSize: "4rem", marginTop: "-3rem" }} />
            </div>
          </li>
          <li className="animated zoomIn delaythree">
            <div className="back"></div>
            <div className="icon">
              <LinkedInIcon style={{ fontSize: "4rem", marginTop: "-3rem" }} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
