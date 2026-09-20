import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to Task Manager</h1>
        <p className="lead">
          Organize your tasks efficiently with our professional task management application
        </p>
        <div className="buttons">
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
