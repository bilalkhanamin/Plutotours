import React from "react";
import Pckimg from "../../assets/images/package.png";
import { Link } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GiHotMeal } from "react-icons/gi";
import { RiHotelFill } from "react-icons/ri";
import { IoIosCar } from "react-icons/io";
import { IoMdAirplane } from "react-icons/io";
import { GiBinoculars } from "react-icons/gi";

function DesktopPackage(props) {
  return (
 
    <div className="l_packages">
      <div className="package_img">
        <img src={props.img[0]} alt="" />
      </div>
      <div className="package_details">
        <h6 class="l_pkg_name">{props.name}</h6>
        <div className="destination">
          <BiTimeFive class="icon" />
          <span>{props.destination}</span>
        </div>
        <div className="duration">
          <HiOutlineLocationMarker class="icon" />
          <span>{props.duration}</span>
        </div>
        <div className="package_inclusions">
          <h6>package inclusions</h6>
          <div className="inclusions">
            <span>
              <GiHotMeal class="icon" />
              Dinner
            </span>
            <span>
              <RiHotelFill class="icon" />
              Hotel
            </span>
            <span>
              <IoIosCar class="icon" />
              Cab
            </span>
            <span>
              <IoMdAirplane class="icon" />
              Flight
            </span>
            <span>
              <GiBinoculars class="icon" />
              Sightseeing
            </span>
          </div>
        </div>
        <div className="price_container">
          <div className="price">
            <span>starting(per person)</span>
            <div>
              <h6>{props.price}/-</h6>
            </div>
          </div>
          <div className="package_btns">
 
             <Link to={`/r_packages/${props.id}`}> <button className="details btn ">details</button></Link>
             <Link to={`/booking/${props.id}`}>   <button className="Book btn">Book now</button></Link>
          </div>
        </div>
      </div>
    </div>
   );
}

export default DesktopPackage;
