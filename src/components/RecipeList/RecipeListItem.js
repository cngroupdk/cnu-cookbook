import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function RecipeListItem(props) {
  return (
    <div>
      <h2>
        <Link to={`/recipe/${props.slug}`}>
          {props.title}
        </Link>
      </h2>
      {props.preparationTime > 0 && <div>Preparation Time: {props.preparationTime}</div>}
      {props.sideDish && <div>Side Dish: {props.sideDish}</div>}
    </div>
  );
}

RecipeListItem.propTypes = {
  title: PropTypes.string.isRequired,
  preparationTime: PropTypes.number,
  sideDish: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

export default RecipeListItem;
