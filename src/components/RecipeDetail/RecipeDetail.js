import React from 'react';

const RecipeDetail = ({ title, directions }) =>
  <div>
    <h2>{title}</h2>
    <pre>{directions}</pre>
  </div>;

export default RecipeDetail;
