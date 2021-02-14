import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <SearchForm />
          <CocktailList />
        </div>
      </div>
    </div>
  );
};

export default Home;
