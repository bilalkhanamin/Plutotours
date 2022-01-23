import React, { useState } from "react";
import {Link} from "react-router-dom";
import { FaCity } from "react-icons/fa";
import { GiDetour } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
 import { FiActivity } from "react-icons/fi";

function Search() {
  const [active, setActive] = useState({
    All:true,
    tours:false,
    destinations:false,
    villas:false,
    flights:false,
    activities:false
  });

   
  return (
    <>
      <div className="search-container">
        <div className="search_inner">
          <div className="buttons-container">
            <button className={active.All ? "option_btn active_button" : "option_btn"} onClick={() => setActive({All:!active.All})}>
              <GiDetour className="btn-icon" />
              All
            </button>
            <button className={active.tours ? "option_btn active_button" : "option_btn"}  onClick={() => setActive({tours:!active.tours})}>
              <GiDetour className="btn-icon" />
              Tours
            </button>
            <button className={active.destinations ? "option_btn active_button" : "option_btn"}  onClick={() => setActive({destinations:!active.destinations})}>
              <FaCity className="btn-icon" />
              destination
            </button>
            <button className={active.villas ? "option_btn active_button" : "option_btn"}  onClick={() => setActive({villas:!active.villas})}>
              <FaHome className="btn-icon" />
              villas
            </button>

            <button className={active.flights ? "option_btn active_button" : "option_btn"}  onClick={() => setActive({flights:!active.flights})}>
              <MdFlight className="btn-icon" />
              flights
            </button>
            <button className={active.activities ? "option_btn active_button" : "option_btn"}  onClick={() => setActive({activities:!active.activities})}>
              <FiActivity className="btn-icon" />
              activities
            </button>
          </div>
          <div className="small_search_bar">
            <form action="/packages">
              <input
                type="text"
                placeholder="Search tours, destinations and more..."
                required
              />
              
             <input type="submit" value="Search" />
               
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
