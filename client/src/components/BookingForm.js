import React from "react";
import pkgimg from "../assets/images/footerbg.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Loader from "react-loader-spinner";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import axios from "axios";

const booking = Yup.object().shape({
  firstName: Yup.string().required(" ").min(3, " "),
  lastName: Yup.string().required(" ").min(3, " "),
  CNIC: Yup.string().required(" ").min(13, " ").max(13, " "),
  mobileNumber: Yup.string().required(" ").min(11, " "),
  pickUpLoc: Yup.string().required(" ").min(6, " "),
  pickUpDate: Yup.date().required(" "),
  adults: Yup.number().required(" ").min(1, " ").max(8, " "),
  childerns: Yup.number().required(" ").max(4, " "),
});

const initialValues = {
  firstName: "",
  lastName: "",
  CNIC: "",
  mobileNumber: "",
  pickUpLoc: "",
  pickUpDate: "",
  adults: "",
  childerns: "",
};

export const BookingForm = (props) => {
  const baseURL = `http://localhost:5000/r_packages/${props.match.params.id}`;

  const [pkg, setPackages] = useState([]);
  const [formData, setFormdata] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [amount, setAmount] = useState({
    adults: "",
    childerns: "",
    total: "",
  });

  const [invoice, setInvoice] = useState({
    name: "",
    CNIC: "",
    Mobile: "",
    location: "",
    date: "",
    adults: "",
    childerns: "",
  });

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPackages(response.data);
      setLoading(false);
    });
  }, []);

  const calculate = (data) => {
    let price = parseInt(pkg.price.split(",").join(""));

    let adults = parseInt(data.adults);
    let childerns = parseInt(data.childerns);

    let adultAmount = price * adults;
    let childernsAmount = (price / 2) * childerns;
    let totalAmount = adultAmount + childernsAmount;

    setAmount({
      adults: adultAmount,
      childerns: childernsAmount,
      total: totalAmount,
    });

    setInvoice({
      name: data.name,
      CNIC: data.CNIC,
      Mobile: data.mobileNumber,
      location: data.pickUpLoc,
      date: data.pickUpDate,
      adults: data.adults,
      childerns: data.childerns,
    });
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
        <div className="booking_container">
          <div className="booking_heading">
            <div className="img_container">
              <img src={pkg.cover_images[0]} alt="" />
            </div>
            <div className="booking_pkg_detials">
              <h3>{pkg.package_name}</h3>
              <h5>
                Rs: <span>{pkg.price}</span> <i>/person</i>
              </h5>
            </div>
          </div>
          <div className="booking_body">
            <div className="booking_personal_details">
              <Formik
                initialValues={initialValues}
                validationSchema={booking}
                onSubmit={(values) => {
                  calculate(values);
                  console.log(values);
                }}
              >
                {(formik) => {
                  const { errors, touched, isValid, dirty } = formik;
                  return (
                    <div className="Booking_form_container">
                      <h3 className="b_heading">Personal details</h3>
                      <Form>
                        <div className="form-row">
                          <div className="row_inner">
                            <Field
                              type="text"
                              name="firstName"
                              id="firstName"
                              placeholder="First name"
                              className={
                                errors.firstName && touched.firstName
                                  ? "input-error"
                                  : null
                              }
                            />
                            <ErrorMessage
                              name="firstName"
                              component="span"
                              className="error"
                            />
                          </div>
                          <div className="row_inner">
                            <Field
                              type="text"
                              name="lastName"
                              id="lastName"
                              placeholder="Last name"
                              className={
                                errors.lastName && touched.lastName
                                  ? "input-error"
                                  : null
                              }
                            />
                            <ErrorMessage
                              name="lastName"
                              component="span"
                              className="error"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="row_inner">
                            <Field
                              type="number"
                              name="CNIC"
                              id="CNIC"
                              placeholder="CNIC"
                              className={
                                errors.CNIC && touched.CNIC
                                  ? "input-error"
                                  : null
                              }
                            />
                            <ErrorMessage
                              name="CNIC"
                              component="span"
                              className="error"
                            />
                          </div>

                          <div className="row_inner">
                            <Field
                              type="number"
                              name="mobileNumber"
                              id="mobileNumber"
                              placeholder="Mob. Number"
                              className={
                                errors.mobileNumber && touched.mobileNumber
                                  ? "input-error"
                                  : null
                              }
                            />
                            <ErrorMessage
                              name="mobileNumber"
                              component="span"
                              className="error"
                            />
                          </div>
                        </div>
                        <h3 className="b_heading">Trip detials</h3>

                        <div className="form-row">
                          <div className="row_inner">
                            <Field
                              type="text"
                              name="pickUpLoc"
                              id="pickUpLoc"
                              placeholder="Pickup location"
                              className={
                                errors.pickUpLoc && touched.pickUpLoc
                                  ? "input-error"
                                  : null
                              }
                            />
                            <ErrorMessage
                              name="pickUpLoc"
                              component="span"
                              className="error"
                            />
                          </div>
                          <div className="row_inner">
                            <Field
                              type="date"
                              name="pickUpDate"
                              id="pickUpDate"
                              placeholder="packup date"
                              className={
                                errors.pickUpDate && touched.pickUpDate
                                  ? "input-error"
                                  : null
                              }
                            />
                            <ErrorMessage
                              name="pickUpDate"
                              component="span"
                              className="error"
                            />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="row_inner">
                            <Field
                              type="number"
                              name="adults"
                              id="adults"
                              placeholder="adults"
                              className={
                                errors.adults && touched.adults
                                  ? "input-error"
                                  : null
                              }
                            />

                            <ErrorMessage
                              name="adults"
                              component="span"
                              className="error"
                            />
                          </div>
                          <div className="row_inner">
                            <Field
                              type="number"
                              name="childerns"
                              id="childerns"
                              placeholder="childerns"
                              className={
                                errors.childerns && touched.childerns
                                  ? "input-error"
                                  : null
                              }
                            />
                            <ErrorMessage
                              name="childerns"
                              component="span"
                              className="error"
                            />
                          </div>
                        </div>
                        <div className="calculate_container">
                          <button
                            type="submit"
                            className={
                              !(dirty && isValid)
                                ? "disabled-btn submit_btn calculate"
                                : "submit_btn calculate"
                            }
                            disabled={!(dirty && isValid)}
                          >
                            calculate package
                          </button>
                        </div>
                      </Form>
                    </div>
                  );
                }}
              </Formik>
            </div>

            <div className="summery">
              <h3 className="b_heading">invoice summery</h3>
              <table>
                <tr>
                  <th>Description</th>
                  <th>No. Of Travelers</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>Adults</td>
                  <td>{invoice.adults ? invoice.adults : "null"}</td>
                  <td>{amount.adults ? amount.adults + ".00" : "null"}</td>
                </tr>
                <tr>
                  <td>Childerns </td>
                  <td>{invoice.childerns ? invoice.childerns : "null"} </td>
                  <td>
                    {amount.childerns ? amount.childerns + ".00" : "null"}
                  </td>
                </tr>
                <tr>
                  <th>Total passengers</th>
                  <th>
                    {invoice.adults
                      ? invoice.adults + invoice.childerns
                      : "null"}
                  </th>
                  <th>{amount.total ? amount.total + ".00" : "null"}</th>
                </tr>
              </table>
              <div className="payment_container">
                <button class="payment_button">Proceed to payment</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};
