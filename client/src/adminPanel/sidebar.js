import React, { useState } from "react";
import { GoDashboard } from "react-icons/go";
import { BsClipboardData } from "react-icons/bs";
import { RiUserSearchLine } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState({
    dashboard: true,
    packages: false,
    users: false,
    messages: false,
  });

  return (
    <>
      <div className="topnavbar">
        <NavLink to="/admin/packages/add">
          <button className="add_packages">Add packages</button>
        </NavLink>

        <span>
          <RiUserSearchLine />
          admin name
        </span>
      </div>
      <div className="sidebar">
        <div className="side_header">
          <NavLink to="/">
            <h5>pluto tours</h5>
          </NavLink>
          <hr />
        </div>

        <div className="side_body">
          <ul>
            <NavLink to="/admin/dashboard">
              <li
                className={active.dashboard ? "activeb" : ""}
                onClick={() => setActive({ dashboard: !active.dashboard })}
              >
                <GoDashboard className="icon" />
                Dashboard
              </li>
            </NavLink>

            <NavLink to="/admin/packages">
              <li
                className={active.packages ? "activeb" : ""}
                onClick={() => setActive({ packages: !active.packages })}
              >
                <BsClipboardData className="icon" />
                Packages
              </li>
            </NavLink>
            <NavLink to="/admin/users">
              <li
                className={active.users ? "activeb" : ""}
                onClick={() => setActive({ users: !active.users })}
              >
                <RiUserSearchLine className="icon" />
                Users
              </li>
            </NavLink>

            <NavLink to="/admin/messages">
              <li
                className={active.messages ? "activeb" : ""}
                onClick={() => setActive({ messages: !active.messages })}
              >
                <HiOutlineMailOpen className="icon" />
                Messages
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
