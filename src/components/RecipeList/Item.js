import React from 'react';
import { Link } from 'react-router';

const RecipeListItem = ({ title, sideDish, preparationTime, slug }) =>
  <li className="item">
    <h3 className="title"><Link to={`/recipe/${slug}`}>{title}</Link></h3>
    {sideDish ? <div>Side dish: {sideDish}</div> : <div>No side dish</div>}
    {preparationTime >= 0 && <div>Preparation time: {preparationTime}</div>}
  </li>;

export default RecipeListItem;
