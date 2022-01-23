import React from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
// importing illustrations
import i1 from "../assets/images/illustrations/1.svg";
import i2 from "../assets/images/illustrations/2.svg";
import i3 from "../assets/images/illustrations/3.svg";
import i4 from "../assets/images/illustrations/4.svg";
import i5 from "../assets/images/illustrations/5.svg";
import i6 from "../assets/images/illustrations/6.svg";
import about1 from "../assets/images/illustrations/about1.svg";
import about2 from "../assets/images/illustrations/about2.svg";
import about3 from "../assets/images/illustrations/about3.svg";

function About() {
  // About categories slider
  var settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: false,
    speed: 300,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //illustration slider
  var illustrationsettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 4000,
    fade: true,
    lazyload: true,
    cssEase: "linear",
  };

  return (
    <div class="about_wrapper">
      {/* About section*/}
      <div className="about-container">
        <div class="about_illustration_container">
          <Slider {...illustrationsettings} class="slick-slider">
            <div class="about_illustration">
              <img src={about1} alt="" />
            </div>
            <div class="about_illustration">
              <img src={about2} alt="" />
            </div>
            <div class="about_illustration">
              <img src={about3} alt="" />
            </div>
          </Slider>
        </div>

        <div className="abt-text-con">
          <h4>About pluto tours</h4>
          <h1>find your best adventure</h1>
          <p>
            Pluto Tours is Pakistan’s Top online marketplace for people to
            search, compare, and book trips, tours and activities from our
            listings and join a pre-arranged tour with like-minded travel
            enthusiasts. Pluto Tours connects Pakistan’s vibrant cultures and
            fascinating landscapes with the rest of the world. Whether a city
            tour for a day, a beach getaway for the weekend, a trip to the
            Northern Areas for a week or a mountaineering expedition for a
            month, Pluto Tours is the easiest way for people to experience
            Pakistan.
          </p>

          <Link to="/packages">
            {" "}
            <button class="abt-btn btn">Explore</button>
          </Link>
        </div>
      </div>

      {/* slider */}
      <div class="slider-wrapper ">
        <Slider {...settings} class="slick-slider">
          <div class="about-slider">
            <img src={i1} alt="" />
            <a href="/packages">Solo</a>
          </div>

          <div class="about-slider">
            <img src={i2} alt="" />
            <a href="/packages">togather</a>
          </div>
          <div class="about-slider">
            <img src={i3} alt="" />
            <a href="/packages">Family </a>
          </div>
          <div class="about-slider">
            <img src={i4} alt="" />
            <a href="/packages">friends</a>
          </div>
          <div class="about-slider">
            <img src={i5} alt="" />
            <a href="/packages">Adventure</a>
          </div>
          <div class="about-slider">
            <img src={i6} alt="" />
            <a href="/packages">Nature</a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default About;
