import React from 'react';
import '../style/welcome.css'
import { Link } from 'react-router-dom';


const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to the my makeup website</h1>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
  );
};

export default WelcomePage;
