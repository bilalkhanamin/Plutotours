import processIllustration from "../assets/images/illustrations/processillustration.svg";
import React from "react";
import {Link} from "react-router-dom"

export const Process = (props) => {
  return (
    <div className="about-container process_illustraion">
      <div class="about_illustration_container">
       <img src={processIllustration} className="process" />
      </div>

      <div className="abt-text-con">
        <h4>simple and easy process</h4>
        <h1>Find your best adventure</h1>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth. A small river named
          Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of
          sentences fly into your mouth.
        </p>

      <Link to="/packages">  <button class="abt-btn btn">Explore</button></Link>
      </div>
    </div>
  );
};
