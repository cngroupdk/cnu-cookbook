import React from 'react';
import Item from './Item';

export const RecipeList = ({ items }) => {
  if (items.length === 0) {
    return <div className="alert alert-info">Žádný recept nenalezen.</div>;
  }

  return (
    <div>
      <h1>Recepty</h1>
      <ul>{items.map(item => <Item key={item._id} item={item} />)}</ul>
    </div>
  );
};

export default RecipeList;
