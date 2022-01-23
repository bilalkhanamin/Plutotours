import React from "react";
import Slider from "react-slick";
import DestinationCard from "./Destinationcard";
import { useState, useEffect } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useSelector } from "react-redux";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <IoIosArrowDropright
      className={className}
      onClick={onClick}
      color="var(--primColor)"
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <IoIosArrowDropleft
      className={className}
      onClick={onClick}
      color="var(--primColor)"
    />
  );
};

function TopDestinations() {
  const fetchedDestinations = useSelector(
    (state) => state.destinations.destinations
  );
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    setDestination(fetchedDestinations);
  }, [fetchedDestinations]);

  // Destination cards slick sittings

  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="destination_wrapper">
      <div className="heading">
        <h1>Top Destinations</h1>
        <div className="line"></div>
        <p className="tag_line">Most Visited destinations</p>
      </div>

      <div className="d_cards_wrapper">
        <Slider {...settings}>
          {destination.map((e) => {
            return (
              <DestinationCard img={e.cover_image} name={e.destination_name} />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TopDestinations;
