import React from 'react';

const Footer = () => {
  return (
    <React.Fragment>
      <div className="mt-auto">
        <footer className="footer bg-primary text-muted text-center mt-5">
          <div className="container p-3">
            <p className="m-1">Cocktail Finder &copy; 2021</p>
            <p className="m-1">
              Created by Tomás Catena for a course of{' '}
              <a
                className="text-muted"
                href="https://www.udemy.com/course/react-tutorial-and-projects-course/"
                target="_blank"
              >
                John Smilga
              </a>
            </p>
            <p className="m-1">
              Data fetched from the{' '}
              <a
                className="text-muted"
                href="https://www.thecocktaildb.com/api.php"
                target="_blank"
              >
                The Cocktail DB
              </a>
            </p>{' '}
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Footer;
