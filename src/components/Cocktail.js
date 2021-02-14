import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, info, glass, category, instructions }) => {
  return (
    <React.Fragment>
      <div className="col-md-4">
        <div className="card rounded-0 shadow-sm mb-4">
          <img src={image} className="card-img-top rounded-0" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="mb-1">{category}</p>
            <p className="text-muted mb-1">{info}</p>
            <div className="">
              <Link
                to={`/cocktail/${id}`}
                className="btn btn-outline-secondary btn-sm mt-3"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cocktail;
