import React, { useState } from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import Search from "./Search";
import { GoEyeClosed } from "react-icons/go";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";



function Landing() {
  // State Hooks
  const [qouteform, setqouteform] = useState(false);

  // local methods
  const handleqouteform = () => setqouteform(!qouteform);

  const input = {
    package_name: Form.package_name,
    
  }


  const signInSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    email: Yup.string().email().required("required"),
    phone: Yup.number().required("required"),
    message: Yup.string().required("required"),
  });
  
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  
  const sendmessage = (data) => {
    console.log(data)
    const {name, email, phone, message } = data;  
       axios.post("http://localhost:5000/-message", {name, email, phone, message})
        .then(res => {
          alert( "sent successfully");
          console.log(res)
          window.location.href='/';
        })
      
  }


  // sliders manuals
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <div className="landing">
        <div className="text-container">
          <div className="inner-text">
            <h3 id="Hero_title">pluto tours</h3>
            <h1 id="hero_heading">Your travel partner</h1>
            <p>
              100+ Destinations, 150+ Travel Expert available for your
              assistance
            </p>
            <Link to="/#message">
              <button className="enroll_now_btn btn" onClick={handleqouteform}>
              get a quote
              </button>
            </Link>
          </div>
        </div>
        <Slider {...settings}>
          <div className="sa"></div>
          <div className="sb"></div>
          <div className="sc"></div>
        </Slider>

        <Search />
      </div>

      {/* // Get qouted model form */}

      <div className={qouteform ? "login_model_form" : "displaynone"}>
        <div className="model_form">
          <div className="qouteform_header">
            <button className="close_form" onClick={handleqouteform}>
              <GoEyeClosed />
            </button>
            <h3>inquire us</h3>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) => {
              sendmessage(values);
             }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <div className="container">
                  <Form>
                    <div className="form-row">
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className={
                          errors.name && touched.name ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="error"
                      />
                    </div>
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
                        type="number"
                        name="phone"
                        id="number"
                        placeholder="Mob. Number"
                        className={
                          errors.phone && touched. phone? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="phone"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="form-row">
                      <Field
                        type="text"
                        name="message"
                        id="message"
                        placeholder="message" 
                      
                        className={
                          errors.message && touched.message
                            ? "input-error "
                            : null  
                        }
                      />
                      <ErrorMessage
                        name="traveler"
                        component="span"
                        className="error"
                      />
                    </div>

                    <button
                      type="submit"
                      className={
                        !(dirty && isValid)
                          ? "disabled-btn submit_btn getqouted"
                          : "submit_btn getqouted"
                      }
                      disabled={!(dirty && isValid)}
                    >
                      send
                    </button>
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

export default Landing;
