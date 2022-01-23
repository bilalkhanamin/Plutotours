import React from "react";
import { useState } from "react";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { CgTimelapse } from "react-icons/cg";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiHotelFill } from "react-icons/ri";
import { MdControlPointDuplicate } from "react-icons/md";
import { FiActivity } from "react-icons/fi";

function Filter() {
  const [open, setopen] = useState({
    categories: false,
    duration: false,
    hotels: false,
    budget: false,
    activities: false,
  });
  return (
    <div className="l_filter">
      <div className="category">
        <div className="f_heading">
          <button onClick={() => setopen({ categories: !open.categories })}>
            <span>
              <MdControlPointDuplicate className="icon" />
              Categories
            </span>
            <IoIosArrowDropdownCircle />
          </button>

          <div className={!open.categories ? "f_body" : " f_body show"}>
            <label class="body_item">
              One
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="body_item">
              Two
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="body_item">
              Three
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <label class="body_item">
              Four
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="f_heading">
          <button onClick={() => setopen({ duration: !open.duration })}>
            <span>
              <CgTimelapse className="icon" />
              duration
            </span>
            <IoIosArrowDropdownCircle />
          </button>
        </div>
        <div className={!open.duration ? "f_body" : " f_body show"}>
          <label class="body_item">
            One
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Four
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div className="category">
        <div className="f_heading">
          <button onClick={() => setopen({ budget: !open.budget })}>
            <span>
              <RiMoneyDollarCircleLine className="icon" />
              budget
            </span>
            <IoIosArrowDropdownCircle />
          </button>
        </div>
        <div className={!open.budget ? "f_body" : " f_body show"}>
          <label class="body_item">
            One
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Four
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div className="category">
        <div className="f_heading">
          <button onClick={() => setopen({ hotels: !open.hotels })}>
            <span>
              <RiHotelFill className="icon" />
              hotels
            </span>
            <IoIosArrowDropdownCircle />
          </button>
        </div>
        <div className={!open.hotels ? "f_body" : " f_body show"}>
          <label class="body_item">
            One
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Four
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>

      <div className="category">
        <div className="f_heading">
          <button onClick={() => setopen({ activities: !open.activities })}>
            <span>
              <FiActivity className="icon" />
              activities
            </span>
            <IoIosArrowDropdownCircle />
          </button>
        </div>
        <div className={!open.activities ? "f_body" : " f_body show"}>
          <label class="body_item">
            One
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Two
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Three
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="body_item">
            Four
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
