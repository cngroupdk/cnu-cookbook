import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Common/Loader';
import RecipeListItem from './RecipeListItem';

function RecipeList(props) {
  if (props.isFetching) {
    return <Loader />;
  }

  return (
    <div>
      {props.recipes.map(recipe => (
        <RecipeListItem
          key={recipe._id}
          title={recipe.title}
          preparationTime={recipe.preparationTime}
          sideDish={recipe.sideDish}
          slug={recipe.slug}
        />
      ))}
    </div>
  );
}

RecipeList.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  recipes: PropTypes.array.isRequired,
};

export default RecipeList;
