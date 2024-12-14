import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage'
import CameraPage from './components/CameraPage';
import SettingsPage from './components/SettingsPage';
import UserPage from './components/UserPage';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="side-navbar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/camera">Camera</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </div>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
