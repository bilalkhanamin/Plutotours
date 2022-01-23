import React, { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import signup_illustration from "../../assets/images/illustrations/account.svg";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login() {

  const logInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "wrong cridentials"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [islogin, setLogin] = useState([]);

  const handleLogin = (data) => {
     if(data.login === true){
        alert(data.message);
        setLogin(data.login);
        window.location.href='/admin';
      }else if(data.login === false){
        alert(data.message);
      } 

  }


  const registerWithApp = (data) => {
    const { email, password } = data;  
     if ( email && password) {
      axios.post("http://localhost:5000/login", {email, password})
        .then(res => {
          handleLogin(res.data);
          console.log(res)
        })
    }
     
  }

  return (
    <>
      <div className="signup_container">
        <div className="signup_illustration">
          <img src={signup_illustration} alt="" />
        </div>
        <div className="form_container">
          <Link to="/" className="close_Btn">
            <GoEyeClosed />
          </Link>
          <div className="form_header">
            <h3>Admin Login</h3>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={logInSchema}
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
                      log In
                    </button>

                  <div className="form_footer">
                      <button>
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

export default Login;
