import React from "react";
import fb_icon from "./images/social-media-icons/fb-icon.png";
import linkedin_icon from "./images/social-media-icons/linkedin-icon.png";
import github_icon from "./images/social-media-icons/github-icon.png";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="name mt-5">Fakhri InfoTech</div>
        </div>
      </div>
      <div className="row quote">
        <div className="col-md-12">
          "Simplicity is a precondition for reliability. While being able to
          control complexity is the prerequisite for arriving at simplicity."
          <hr />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          &copy; All Rights Reserved By Fakhri InfoTech
        </div>
        <div className="col-md-6 social-media-links">
          <a href="https://github.com/FakhriInfoTech" className="ml-2">
            <img src={github_icon} alt="github-icon" width="3%" height="25" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
