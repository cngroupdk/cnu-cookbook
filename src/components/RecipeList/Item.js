import React from 'react';
import { Link } from 'react-router';

const RecipeListItem = ({ title, sideDish, preparationTime, slug }) =>
  <li>
    <div>Title: {title}</div>
    {sideDish ? <div>Side dish: {sideDish}</div> : <div>No side dish</div>}
    {preparationTime >= 0 && <div>Preparation time: {preparationTime}</div>}
    <div><Link to={`/recipe/${slug}`}>Go to Detail</Link></div>
  </li>;

export default RecipeListItem;
