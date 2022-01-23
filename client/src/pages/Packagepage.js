import React from "react";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import DesktopPackage from "../components/Packages/DesktopPackage";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
function Packagepage() {
  const [packages, setPackages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchedPackages = useSelector((state) => state.packages.packages);

  useEffect(() => {
    setPackages(fetchedPackages);
    setLoading(false);
  }, [fetchedPackages]);

  const getPackages = packages.map((e) => {
    return (
      <DesktopPackage
        id={e._id}
        name={e.package_name}
        img={e.cover_images}
        destination={e.starting_loc}
        duration={e.duration}
        price={e.price}
      />
    );
  });
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
        <div className="header">
          <div className="m-search">
            <form action="#">
              <input
                type="text"
                placeholder="Search Tours, Homes & Villas, Hotels, Flights"
              />
              <input type="submit" value="search" />
            </form>
          </div>
        </div>

        <div className="Packages_section">
          {/* <Filter /> */}

          <div className="desktop_package">{getPackages}</div>
        </div>
        
      </>
    );
  }
}

export default Packagepage;
