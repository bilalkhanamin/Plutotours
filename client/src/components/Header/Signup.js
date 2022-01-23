import React, { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import signup_illustration from "../../assets/images/illustrations/account.svg";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Signup() {


  const signInSchema = Yup.object().shape({
    name: Yup.string().required("required").min(8, "invalid name"),
    email: Yup.string().email().required("invalid email"),
    phone: Yup.string().required("required").min(11, "invalid phone number"),
    CNIC: Yup.string().required("required").max(13, "invalid CNIC"),
    password: Yup.string().required("required").min(4, "min 8 char")

  });

  const initialValues = {
    name: "",
    email: "",
    phone:"",
    CNIC:"",
    password: "",
  };

  

  const [newUser, setNewUser] = useState([]);

  const handleNewUser = (data) => {
    if (data.signup === false) {
      alert(data.message);
      console.log("false");
      // window.location.href = "/signup";

    } else if (data.signup === true) {
      alert(data.message);
      window.location.href = "/";
      window.localStorage.setItem("login", true);
      window.localStorage.setItem("user", JSON.stringify(data));
    }
    setNewUser(data);
    console.log(localStorage.getItem('user'))
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user, //spread operator
  //     [name]: value,
  //   });
  // };

  const registerWithApp = (data) => {
    const { name, email, password } = data;
    if (name && email && password) {
      axios
        .post("http://localhost:5000/signup", { name, email, password })
        .then((res) => {
          handleNewUser(res.data);
        });
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <div className="signup_container">
        <div className="signup_illustration">
          <img src={signup_illustration} alt="" />
        </div>
        <div className="form_container">
          {/* <Link to="/" className="close_Btn">
            <GoEyeClosed />
          </Link> */}
          <div className="form_header">
            <h3>Create account</h3>
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
                        id="phone"
                        placeholder="Phone"
                        className={
                          errors.phone && touched.phone ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="Phone"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="form-row">
                      <Field
                        type="number"
                        name="CNIC"
                        id="CNIC"
                        placeholder="CNIC"
                        className={
                          errors.CNIC && touched.CNIC ? "input-error" : null
                        }
                      />
                      <ErrorMessage
                        name="CNIC"
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
                    >
                      Create
                    </button>

                    <div className="form_footer">
                      <button>
                        <Link to="/#login">
                          already have account? login here
                        </Link>
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

export default Signup;
