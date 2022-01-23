import React from "react";

import About from "../components/About";
import Featuredpackages from "../components/Packages/Featuredpackages";
import TopDestinations from "../components/Packages/topDestinations";
import Landing from "../components/Header/Landing";
import Footer from "../components/Footer";
import { Process } from "../components/process";

function Homepage() {
  return (
    <>
      <Landing />
      <About />
      <TopDestinations />
      <Featuredpackages />
      <Process />
      <Footer />
    </>
  );
}

export default Homepage;
