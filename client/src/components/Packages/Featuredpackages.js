import Slider from "react-slick";
import MobilePackages from "./Mobilepackage";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

function Featuredpackages() {
  const [packages, setPackages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchedPackages = useSelector((state) => state.packages.packages);

  useEffect(() => {
    setPackages(fetchedPackages);
    setLoading(false);
  },[fetchedPackages]);

  // Mobile package cards slick sittings
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

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    lazyLoad: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const featuredPackages = packages.map((e) => {
    return (
      <MobilePackages
        name={e.package_name}
        img={e.cover_images[0]}
        destination={e.starting_loc}
        duration={e.duration}
        price={e.price}
        id={e._id}
        overview={e.overview}
        itinerary={e.itinerary}
        host_name={e.host_name}
        tags={e.tags}
        c_policy={e.c_policy}
        attractions={e.attractions}
        activities={e.activities}
      />
    );
  });

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <Loader
          type="ThreeDots"
          color="#00b22d"
          height={100}
          width={100}
          //3 secs
        />
      </div>
    );
  } else {
    return (
      <div className="featured_wrapper">
        <div className="heading">
          <h1>Featured Packages</h1>
          <div className="line"></div>
          <p className="tag_line">Some of the Best Selling packages</p>
        </div>

        <div className="cards-wrapper">
          <Slider {...settings}>{featuredPackages}</Slider>
        </div>
      </div>
    );
  }
}

export default Featuredpackages;
