import React from "react";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
 import { useSelector } from "react-redux";

function Packages() {

  const fetchedMessages = useSelector((state) => state.messages.messages);

  const [message, setmessage] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setmessage(fetchedMessages);
  }, [fetchedMessages]);


  return (
    <div className="admin_container">
      <div className="package_contaier">
        <Table hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>phone</th>
              <th>message</th>
            </tr>
          </thead>
          {message.map((e) => {
            return (
              <tbody>
                <tr>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.phone}</td>
                  <td>{e.message}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default Packages;
