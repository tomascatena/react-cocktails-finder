import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className="text-center">No cocktails matched your search criteria</h2>
    );
  }

  return (
    <div>
      <h2 className="text-center mb-3">cocktails</h2>
      <div className="row">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
