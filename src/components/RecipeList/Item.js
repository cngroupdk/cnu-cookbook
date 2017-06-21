import React from 'react';

const RecipeListItem = ({
  title,
  sideDish,
  preparationTime,
}) =>
  <li>
    <div>Název: {title}</div>
    {sideDish
      ? <div>Příloha: {sideDish}</div>
      : <div>Žádná příloha</div>}
    {preparationTime >= 0 &&
      <div>Doba přípravy: {preparationTime}</div>}
  </li>;

export default RecipeListItem;
