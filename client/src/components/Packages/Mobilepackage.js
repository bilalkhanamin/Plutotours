import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

function Mobile_packages(props) {
  return (
       <div className="card">
        <div className="img">
          <img src={props.img} alt="" />
        </div>

        <div className="package-details">
          <h3 className="pkg_name">{props.name}</h3>
          <div className=" location_duration">
            <div className="pkg_location">
              <HiOutlineLocationMarker />
              <span>{props.destination}</span>
            </div>
            <div className="pkg_duration">
              <BiTimeFive />
              <span>{props.duration}</span>
            </div>
          </div>
          <div className="pkg_price">
            <p>Starting from</p>
            <span>{props.price}/-</span>
          </div>

          <div className="btns-wrapper">
            <Link to={`/r_packages/${props.id}`}>
              <button className="details_btn btn">details</button>
            </Link>
            <Link to={`/booking/${props.id}`}>
              <button className="Book_btn btn">Book now</button>
            </Link>
          </div>
        </div>
      </div>
   );
}

export default Mobile_packages;
