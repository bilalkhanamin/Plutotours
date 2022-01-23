import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Form,
  Col,
  Button,
  Row,
  InputGroup,
  FormControl,
 } from "react-bootstrap";

function Addpackage() {
  const [form, setFormData] = useState({});

  const [cover_images, setCoverImages] = useState([]);

  const [activities, setActivities] = useState([]);

  const [attractions, setAttractions] = useState([]);

  const [itinerary, setItinerary] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const AddImage = (e) => {
    e.preventDefault();

    let value = e.target.image_link.value;

    setCoverImages([...cover_images, value]);
    return (e.target.image_link.value = "");
  };

  const addActivities = (e) => {
    e.preventDefault();
    let value = e.target.activities.value;

    setActivities([...activities, value]);
    return (e.target.activities.value = "");
  };

  const addAttractions = (e) => {
    e.preventDefault();
    let value = e.target.attractions.value;

    setAttractions([...attractions, value]);
    return (e.target.attractions.value = "");
  };

  //////////////////////////////////////////////////////////////

  // WASTED TWO DAYS HERE //

  /////////////////////////////////////////////////////////////

  const addItinerary = (e) => {
    e.preventDefault();
    let title, value;
    title = e.target.select.value;
    value = e.target.Itinerary.value;

    setItinerary([
      ...itinerary.data,
      {
        title: title,
        data: [value],
      },
    ]);
  };

  const inputData = {
    package_name: form.package_name,
    starting_loc: form.starting_loc,
    duration: form.duration,
    price: form.price,
    host_name: form.host_name,
    overview: form.overview,
    about_host: form.about_host,
    cover_images: cover_images,
    activities: activities,
    attractions: attractions,
  };
  const AddtoDatabase = () => {
    const baseURL = "http://localhost:5000/r_packages";
    let config={headers:{"Content-Type":"application/json"}}
    axios.post(baseURL,  inputData, config ).then((res) => {
      console.log(res.data);
      alert("package added");
    });

    console.log(inputData);
  };
  return (
    <div className="admin_container">
      <div className="add_container">
        <div className="form">
          <h4>Create New Package</h4>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Package name</Form.Label>
            <Form.Control
              placeholder="Enter name"
              name="package_name"
              onChange={handleChange}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="">
              <Form.Label>Starting Loc.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Starting location"
                name="starting_loc"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                name="duration"
                placeholder="Duration"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId=" ">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Price"
                name="price"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="">
              <Form.Label>Host name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Host name"
                name="host_name"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Form onSubmit={AddImage}>
            <Row className="align-items-center">
              <Form.Label>Add Image</Form.Label>
              <InputGroup className="mb-3">
                <Col className="my-1">
                  <Form.Control
                    type="text"
                    placeholder="Enter Images link"
                    name="image_link"
                    required
                  />
                </Col>

                <Col xs="auto" className="my-1">
                  <Button type="submit" variant="success" id="button-addon2">
                    Add
                  </Button>
                </Col>
              </InputGroup>
            </Row>
          </Form>
          <Form onSubmit={addActivities}>
            <Row className="align-items-center">
              <Form.Label>Trip Activities</Form.Label>
              <InputGroup className="mb-3">
                <Col className="my-1">
                  <Form.Control
                    type="text"
                    placeholder="Enter Activity"
                    name="activities"
                    required
                  />
                </Col>

                <Col xs="auto" className="my-1">
                  <Button type="submit" variant="success" id="button-addon2">
                    Add
                  </Button>
                </Col>
              </InputGroup>
            </Row>
          </Form>
          <Form onSubmit={addAttractions}>
            <Row className="align-items-center">
              <Form.Label>Main Attractions</Form.Label>
              <InputGroup className="mb-3">
                <Col className="my-1">
                  <Form.Control
                    type="text"
                    placeholder="Enter Attractions"
                    name="attractions"
                    required
                  />
                </Col>

                <Col xs="auto" className="my-1">
                  <Button type="submit" variant="success" id="button-addon2">
                    Add
                  </Button>
                </Col>
              </InputGroup>
            </Row>
          </Form>

          <Form onSubmit={addItinerary}>
            <Row className="align-items-center">
              <Form.Label>Trip Itineraray</Form.Label>

              <InputGroup className="mb-3">
                <select
                  Select
                  aria-label="Default select example"
                  name="select"
                >
                  <option value="Day 1">Day 1</option>
                  <option value="Day 2">Day 2</option>
                  <option value="Day 3">Day 3</option>
                  <option value="Day 4">Day 4</option>
                  <option value="Day 5">Day 5</option>
                  <option value="Day 6">Day 6</option>
                  <option value="Day 7">Day 7</option>
                  <option value="Day 8">Day 8</option>
                  <option value="Day 9">Day 9</option>
                  <option value="Day 10">Day 10</option>
                </select>

                <FormControl
                  type="text"
                  placeholder="Enter Itinerary"
                  name="Itinerary"
                />
                <Button type="submit" variant="success" id="button-addon2">
                  Add
                </Button>
              </InputGroup>
            </Row>
          </Form>

          <Form.Group as={Col} controlId="" className="mb-3">
            <Form.Label>About Host</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write About Host"
              name="about_host"
              style={{ height: "150px" }}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="" className="mb-3">
            <Form.Label>package overview</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write package overview"
              style={{ height: "150px" }}
              name="overview"
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            type="submit"
            variant="success"
            id="button-addon2"
            onClick={AddtoDatabase}
          >
            Add package to database
          </Button>
          <br />
          <br />
        </div>

        <div className="form_data">
          <h4>Package Output</h4>
          <div className="data_group">
            <span>package name:</span>
            <b>{form.package_name ? form.package_name : " "}</b>
          </div>

          <div className="data_group">
            <span>starting location:</span>
            <b>{form.starting_loc ? form.starting_loc : " "}</b>
          </div>

          <div className="data_group">
            <span>Trip Duration:</span>
            <b>{form.duration ? form.duration : " "}</b>
          </div>

          <div className="data_group">
            <span>price:</span>
            <b>{form.price ? form.price : " "}</b>
          </div>

          <div className="data_group">
            <span>Host name:</span>
            <b>{form.host_name ? form.host_name : " "}</b>
          </div>

          <div className="data_group large">
            <span>Images links:</span>
            <ul>
              {cover_images
                ? cover_images.map((e) => (
                    <li>
                      <a href={e} target="_blank">
                        {e}
                      </a>
                    </li>
                  ))
                : ""}
            </ul>
          </div>

          <div className="data_group large">
            <span>Activities:</span>
            <ul>{activities ? activities.map((e) => <li> {e}</li>) : ""}</ul>
          </div>

          <div className="data_group large">
            <span>Attractions:</span>
            <ul>{attractions ? attractions.map((e) => <li> {e}</li>) : ""}</ul>
          </div>

          <div className="data_group large">
            <span>About Host:</span>
            <p>{form.about_host ? form.about_host : " "}</p>
          </div>

          <div className="data_group large">
            <span>Package Overview:</span>
            <p>{form.overview ? form.overview : " "}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addpackage;
