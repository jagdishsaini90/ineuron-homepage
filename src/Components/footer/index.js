import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import "./style.scss";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <div>
            <img
              src="https://ineuron.ai/images/ineuron-logo-white.png"
              alt=""
            />
            <div>
              <LinkedInIcon
                fontSize="large"
                style={{ color: "#fff", marginRight: "10px" }}
              />
              <FacebookIcon
                fontSize="large"
                style={{ color: "#fff", marginRight: "10px" }}
              />
              <TwitterIcon
                fontSize="large"
                style={{ color: "#fff", marginRight: "10px" }}
              />
              <YouTubeIcon fontSize="large" style={{ color: "#fff" }} />
            </div>
          </div>
          <div>
            <LocationOnIcon />
            <p>
              17th Floor tower A Brigade Signature Towers, Sannatammanahalli,
              Bengaluru, Karnataka 562129
            </p>
          </div>
          <div>
            <EmailIcon />
            <p>
              <b>Email us: </b>
              contact@ineuron.ai
            </p>
          </div>
        </li>
        <li>
          <h1>Company</h1>
          <div className="footer-company">
            <div>
              <p>About us</p>
              <p>Hack-A-Thon</p>
              <p>Job guarantee</p>
              <p>Privacy policy</p>
            </div>
            <div>
              <p>Contact us</p>
              <p>FAQs</p>
              <p>Job assistance</p>
              <p>Terms and conditions</p>
            </div>
          </div>
        </li>
        <li>
          <h1>Products</h1>
          <p>Job Portal</p>
          <p>Internship portal</p>
          <p>Become an affiliate</p>
          <p>Hall of fame</p>
          <p>InBlog</p>
        </li>
      </ul>
      <img
        style={{ marginTop: "50px" }}
        src="https://ineuron.ai/images/iso-9001-2015.svg"
        alt=""
      />
      <p style={{ color: "#fff", marginLeft: "20px", marginTop: "10px" }}>
        ISO 9001
      </p>
    </div>
  );
}
