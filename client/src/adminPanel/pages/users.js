import React from "react";
import { Table } from "react-bootstrap";
import {useState, useEffect} from "react";
import { useSelector } from "react-redux";
 function Users() {

  const[users, setUsers] = useState([]);
  const fetchedUsers = useSelector(state => state.users.users)
 
  useEffect(() => {
       setUsers(fetchedUsers);
  }, [fetchedUsers]);

   return (
    <div className="admin_container">
      <div className="package_contaier">
        <Table  hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full name</th>
              <th>Email</th>
             </tr>
          </thead>
          {
            users.map(e => {
              return(
                <tbody>
                <tr>
                  <td>{e._id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                </tr>
               
              </tbody>
              )
            })
          }
         
        </Table>
      </div>
    </div> 
    
    );
}

export default Users;
