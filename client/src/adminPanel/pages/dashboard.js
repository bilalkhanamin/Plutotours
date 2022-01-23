import React from 'react';

function Dashboard() {
  return (
    <div className='admin_container'>
        <div className="cards_container">
          <div className="card">
            <h3>Active packages</h3>
            <h1>27</h1>
          </div>
          <div className="card">
            <h3>total Users</h3>
            <h1>85</h1>
          </div>
          <div className="card">
            <h3>Bookings</h3>
            <h1>27</h1>
          </div>
          <div className="card">
            <h3>messages</h3>
            <h1>27</h1>
          </div>
        </div>
    </div>
  );
}

export default Dashboard;