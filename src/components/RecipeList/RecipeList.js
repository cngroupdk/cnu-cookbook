import React from 'react';
import RecipeListItem from './Item';
import './RecipeList.css';

const RecipeList = ({ recipes }) =>
  <ul className="recipe-list">
    {recipes.map(({ _id, title, sideDish, preparationTime, slug }) =>
      <RecipeListItem
        key={_id}
        title={title}
        sideDish={sideDish}
        preparationTime={preparationTime}
        slug={slug}
      />,
    )}
  </ul>;

export default RecipeList;
