import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Admin Dashboard</h3>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="list-group-item">
          <Link to="/users">Users</Link>
        </li>
        <li className="list-group-item">
          <Link to="/settings">Settings</Link>
        </li>
        <li className="list-group-item">
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
