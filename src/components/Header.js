import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="container-fluid header algin-self-center">
      <Navbar />
      <div className="row hero-text">
        <div className="col-md-12 mt-5 intro">Hey, there</div>
        <div className="col-md-12 intro">We're</div>
        <div className="col-md-12 my-name">Fakhri InfoTech</div>
        <div className="col-md-12 mb-5 intro">
          
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ "Innovating Solutions for a Digital Future", "Your Strategic Technology Partner" ]'
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
