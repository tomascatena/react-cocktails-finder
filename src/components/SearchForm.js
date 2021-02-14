import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col col-sm-12 col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Search Your Favourite Cocktail
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                ref={searchValue}
                onChange={searchCocktail}
                autoComplete="off"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
