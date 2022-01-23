import React from "react";
import { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Tab, Tabs } from "react-bootstrap";
import Slider from "react-slick";
import Loader from "react-loader-spinner";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchPackageById } from "../../features/Slices/packagesSlice";

function Packagedetails(props) {
  const packageID = props.match.params.id;
  const dispatch = useDispatch();
  const fetchedPackage = useSelector((state) => state.packages.packageById);

  const [singlePackage, setPackages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchPackageById(packageID));
    setPackages(fetchedPackage);
    setLoading(false);
  }, [dispatch,packageID]);

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

  // sliders manuals
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
      <>
        <div className="package_details_wrapper">
          <div className="package_name">
            <h3>{singlePackage.package_name}</h3>
          </div>

          <div className="pkg_host">
            <FaUserCircle className="host_icon" />
            <span>{singlePackage.host_name}</span>
          </div>

          <Slider {...settings} className="package_image">
            <div>
              {" "}
              <img src={singlePackage.cover_images[0]} alt="" />{" "}
            </div>
            <div>
              {" "}
              <img src={singlePackage.cover_images[2]} alt="" />{" "}
            </div>
            <div>
              {" "}
              <img src={singlePackage.cover_images[1]} alt="" />{" "}
            </div>
          </Slider>

          <div className="pkg_details">
            <Tabs
              defaultActiveKey="overview"
              className="mb-3 tabstyle"
              variant={"pills"}
            >
              <Tab eventKey="overview" title="Overview">
                {singlePackage.overview}
              </Tab>
              <Tab eventKey="Itinerary" title="Trip Itinerary">
                {singlePackage.itinerary.map((e) => {
                  return (
                    <>
                      <b>{e.title}</b>
                      <ul>
                        {e.data.map((e) => {
                          return <li>{e}</li>;
                        })}
                      </ul>
                    </>
                  );
                })}
              </Tab>
              <Tab eventKey="attractions" title="Attractions">
                {singlePackage.attractions.map((e) => {
                  return <li>{e}</li>;
                })}
              </Tab>
              <Tab eventKey="activities" title="Activities">
                {singlePackage.activities.map((e) => {
                  return <li>{e}</li>;
                })}
              </Tab>

              <Tab eventKey="policy" title="Cancellation Policy">
                <li>
                  50% of the total amount will be deducted if **cancellation**
                  notified 7 days prior to the trip.
                </li>
                <li>
                  75% of the total amount will be deducted if **cancellation**
                  notified 4 days prior to the trip.{" "}
                </li>
                <li>
                  100% of the total amount will be deducted if **cancellation**
                  notified in the last 4 days prior to the trip unless the trip
                  is cancelled by the management.
                </li>
              </Tab>

              <Tab eventKey="host" title="About Host">
                {
                  <>
                    <h5>{singlePackage.host_name}</h5>
                    <p>{singlePackage.about_host}</p>
                  </>
                }
              </Tab>
              <Tab eventKey="Faqs" title="FAQ's">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How do I make a booking?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        You can make a booking through Credit Card/Debit Card
                        and via wire transfer. Please make sure you authorize
                        your transaction from your bank beforehand. Note: Once
                        all approvals are in place (i.e. Letter of Invitation +
                        Visa etc)
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I make a tentative booking without paying?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Unfortunately, this is not an option since our tour
                        operators invest resources according to the number of
                        people who have confirmed their spots in any particular
                        activity and therefore payment must be made at the time
                        of booking via any of the payment options listed.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is the refund policy in case of cancellation?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        Varies across tours. Will be explained in detail on trip
                        notes.
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className="bottom_sticky">
            <div>
              <div className="package_loc_dur">
                <div className="pkg_location">
                  <HiOutlineLocationMarker />
                  <span>{singlePackage.starting_loc}</span>
                </div>
                <div className="pkg_duration">
                  <BiTimeFive />
                  <span>{singlePackage.duration}</span>
                </div>
              </div>
              <div className="package_price">
                <h3>
                  Rs: <span>{singlePackage.price}</span> <i>/person</i>{" "}
                </h3>
              </div>
            </div>
            <div>
              <Link to="/packages">
                {" "}
                <button className="detail btn">See more</button>
              </Link>
              <Link to={`/booking/${props.match.params.id}`}>
                {" "}
                <button className="Book_btn">Book now</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Packagedetails;
