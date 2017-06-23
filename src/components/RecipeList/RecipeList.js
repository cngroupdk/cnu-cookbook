import React from 'react';
import RecipeListItem from './Item';

const RecipeList = ({ recipes }) =>
  <ul>
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
