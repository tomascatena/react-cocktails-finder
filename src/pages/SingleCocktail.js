import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import react from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: alcoholic,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
            strIngredient6: ingredient6,
            strMeasure1: measure1,
            strMeasure2: measure2,
            strMeasure3: measure3,
            strMeasure4: measure4,
            strMeasure5: measure5,
            strMeasure6: measure6,
          } = data.drinks[0];

          const ingredients = [
            [ingredient1, measure1],
            [ingredient2, measure2],
            [ingredient3, measure3],
            [ingredient4, measure4],
            [ingredient5, measure5],
            [ingredient6, measure6],
          ];

          const newCocktail = {
            name,
            image,
            alcoholic,
            category,
            glass,
            instructions,
            ingredients,
          };

          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2>No cocktail to dispaly</h2>;
  }

  const {
    name,
    image,
    category,
    alcoholic,
    glass,
    instructions,
    ingredients,
  } = cocktail;

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col col-md-10 offset-md-1">
          <h1 className="mb-4">{name}</h1>
          <div className="row">
            <div className="col-md-6">
              <p>Category: {category}</p>
              <p>Alcoholic: {alcoholic === 'Alcoholic' ? 'Yes' : 'No'}</p>
              <p>Glass: {glass}</p>
              <p>Instructions: {instructions}</p>
              <p>Ingredients:</p>
              <ul>
                {ingredients.map((ingredient, index) => {
                  if (ingredient[0] !== null) {
                    return (
                      <li key={index}>
                        {ingredient[0]}: {ingredient[1]}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="col-md-6">
              <img src={image} alt={name} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
