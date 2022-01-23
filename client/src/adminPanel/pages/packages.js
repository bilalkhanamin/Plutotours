import React from "react";
import Loader from "react-loader-spinner";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


function Packages() {
  const fetchedPackages = useSelector((state) => state.packages.packages);
  const [packages, setPackages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setPackages(fetchedPackages);
    setLoading(false);
  }, [fetchedPackages]);

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
      <div className="admin_container">
        <div className="package_contaier">
          <Table hover size="sm">
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Price</th>
                <th>Starting Location</th>
                <th>Duration</th>
                <th>Host Name</th>
              </tr>
            </thead>
            {packages.map((e) => {
              return (
                <tbody>
                  <tr>
                    <td>{e.package_name}</td>
                    <td>{e.price}</td>
                    <td>{e.starting_loc}</td>
                    <td>{e.duration}</td>
                    <td>{e.host_name}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </div>
    );
  }
}

export default Packages;
