import React from 'react';
import RecipeListItem from './Item';

const RecipeList = ({ recipes }) =>
  <ul>
    {recipes.map(
      ({ _id, title, sideDish, preparationTime }) =>
        <RecipeListItem
          key={_id}
          title={title}
          sideDish={sideDish}
          preparationTime={preparationTime}
        />,
    )}
  </ul>;

export default RecipeList;
