import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6 offset-3 text-center">
          <h2 className="mb-4">Page not found</h2>
          <p>Sorry. The page you are looking for does not exists.</p>
          <Link to="/" className="btn btn-primary mt-4">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
