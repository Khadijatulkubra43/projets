import React from "react";
import '../style/user.css';

const UserPage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <nav className="navbar">
          <a href="#">Dashboard</a>
          <a href="#">Edit Profile</a>
          <a href="#">Edit Password</a>
          <a href="#">User Logout</a>
        </nav>
      </div>
      <div className="profile-card">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/100" alt="Profile" />
        </div>
        <h2>Khadija</h2>
        <p className="username">khadija2</p>

        <div className="profile-details">
          <div className="detail-row">
            <label>Username</label>
            <p>Khadija</p>
            <a href="#">✏️</a>
          </div>
          <div className="detail-row">
            <label>Email</label>
            <p>khadija@gmail.com</p>
            <a href="#">✏️</a>
          </div>
          <div className="detail-row">
            <label>Address</label>
            <p>Karachi</p>
            <a href="#">✏️</a>
          </div>
          <div className="detail-row">
            <label>Nickname</label>
            <p>kubra</p>
            <a href="#">✏️</a>
          </div>
          <div className="detail-row">
            <label>DOB</label>
            <p>April 28,2000 </p>
            <a href="#">✏️</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
