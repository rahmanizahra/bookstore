import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 mb-4" style={{color:"white"}}>Welcome to the BookStore!</h1>
        <Link to="/setup">
          <button className="btn btn-primary btn-lg">Go to Setup</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
