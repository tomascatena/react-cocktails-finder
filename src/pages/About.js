import React from 'react';

const About = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col col-sm-12 col-md-6 offset-md-3">
          <h2 className="text-center mb-4">about this app</h2>
          <p>Web application made in React.</p>
          <p>
            Created by Tomás Catena for a course of{' '}
            <a
              href="https://www.udemy.com/course/react-tutorial-and-projects-course/"
              target="_blank"
            >
              John Smilga
            </a>
          </p>
          <p>
            Data fetched from the{' '}
            <a href="https://www.thecocktaildb.com/api.php" target="_blank">
              The Cocktail DB
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
