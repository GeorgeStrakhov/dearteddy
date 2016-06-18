import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="page home-page">
    <p>
      <Link to="/about">
        learn more
      </Link>
    </p>
  </div>
);

export default Home;
