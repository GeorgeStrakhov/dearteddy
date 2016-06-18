import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div className="page home-page">
    <Link to="/matching/human" className="btn btn-default">I need a teddy bear</Link>
    <hr />
    <Link to="/matching/bear" className="btn btn-default">I want to be somebody's teddy bear</Link>
    <hr />
    <p>
      <Link to="/about">
        learn more
      </Link>
    </p>
  </div>
);

export default Home;
