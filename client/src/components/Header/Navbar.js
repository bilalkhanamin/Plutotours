import React, { useState } from "react";
import { RiLoginCircleFill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { GoEyeClosed } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Dropdown, Alert, ButtonGroup, DropdownButton } from "react-bootstrap";

// Main Function
function Navbar() {
  const [showNavbar, setnavbar] = useState(false);
  const [showloginform, setloginform] = useState(false);
  const [showpopup, setpopup] = useState(false);

  //methods
  const handleNav = () => setnavbar(!showNavbar);
  const handleform = () => setloginform(!showloginform);
  const handlepopup = () => setpopup(!showpopup);

  const initialValues = {
    email: "",
    password: "",
  };

  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("required"),
    password: Yup.string().required("required").min(4, " "),
  });

  const [credentials, setCredential] = useState();

  const [islogin, setLogin] = useState();

  const [isSticky, setSticky] = useState(false);

  const handleSticky = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const handleLogin = (data) => {
    if (data.login === true) {
      alert(data.message);
      handleform();
      setLogin(data.login);
      setCredential(data.user);
      window.localStorage.setItem("login", true);
      window.localStorage.setItem("user", JSON.stringify(data));

      console.log(localStorage.getItem("user"));
    } else if (data.login === false) {
      alert(data.message);
    }
  };

  const registerWithApp = (data) => {
    const { email, password } = data;
    if (email && password) {
      axios
        .post("http://localhost:5000/-login", { email, password })
        .then((res) => {
          handleLogin(res.data);
          console.log(res);
        });
    }
  };

  window.addEventListener("scroll", handleSticky);
  return (
    <>
      {/* menu bar */}
      <div class={isSticky ? "menubar addBackground" : "menubar addgredient "}>
        {/* // logo */}
        <div className="logo">
          <Link to="/" className="logo">
            PLUTO TOURS
          </Link>
        </div>

        {/* // Navigations */}
        <nav
          className={
            showNavbar ? "show_navbar overlay  nav_inner_container" : ""
          }
        >
          <div className="nav_inner_container" id="nav_inner_container">
            <button
              className="close_navbar"
              id="close_navbar"
              onClick={handleNav}
            >
              <GoEyeClosed />
            </button>
            <Link to="/" className="nav_item">
              Home
            </Link>
            <Link to="/about" className="nav_item">
              About
            </Link>
            <Link to="/packages" className="nav_item">
              Packages
            </Link>

            
            {/* <DropdownButton
              as={ButtonGroup}
              title="Login"
              id="bg-nested-dropdown"
              className={
                localStorage.getItem("login") == true
                  ? "loginButn"
                  : "loginButn"
              }
              variant="success"
            >
              <Link to="/#login">
                {" "}
                <Dropdown.Item href="" onClick={handleform}>
                  User
                </Dropdown.Item>
              </Link>
              <Link to="/login">
                {" "}
                <Dropdown.Item href="/login">Admin</Dropdown.Item>
              </Link>
            </DropdownButton> */}
            <Link to="/#login">
            <button className="loginButn login_signup" onClick={handleform}>Sign in
           <RiLoginCircleFill className="btn_icon"/>
            </button>
            </Link>
          </div>
        </nav>

        {/* // Nav Search bar */}

        <form className="search_bar" action="/packages">
          <input
            type="text"
            className="menu_search"
            placeholder="Tours, Destinations ..."
            required
          />
          <button type="submit" className="search_btn">
            <span>Search</span>
          </button>
        </form>
        <button className="menu_btn" onClick={handleNav}>
          <CgMenuRight />
        </button>
      </div>

      {/* Login model form */}
      <div className={showloginform ? "login_model_form" : "displaynone"}>
        <div className="model_form" id="model_form">
          <div className="form_header">
            <button className="close_form" onClick={handleform}>
              <GoEyeClosed />
            </button>
            <span className="avatar_circle">
              <FaUserCircle className="avatar" />
            </span>
            <h3>Login Here</h3>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => {
              registerWithApp(values);
            }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <div className="container">
                  <Form>
                    <div className="form-row">
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={
                          errors.email && touched.email ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="form-row">
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className={
                          errors.password && touched.password
                            ? "input-error"
                            : null
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="error"
                      />
                    </div>

                    <button
                      type="submit"
                      className={
                        !(dirty && isValid)
                          ? "disabled-btn submit_btn"
                          : "submit_btn"
                      }
                      disabled={!(dirty && isValid)}
                      onClick={registerWithApp}
                    >
                      Sign In
                    </button>
                    <div className="form_footer">
                      <button onClick={handleform}>
                        <Link to="/signup">New here? Create account</Link>{" "}
                      </button>
                    </div>
                  </Form>
                </div>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Navbar;
