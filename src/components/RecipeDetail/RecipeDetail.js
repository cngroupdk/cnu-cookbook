import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Loader from '../Common/Loader';

function RecipeDetail(props) {
  if (props.isFetching) {
    return <Loader />;
  }

  // TODO: Display ingredients
  return (
    <div>
      <h1>{props.title}</h1>
      <Link to={`/recipe/${props.slug}/edit`}>Edit</Link><br />
      Preparation time: {props.preparationTime}<br />
      Servings: {props.servingCount}<br />
      Side dish: {props.sideDish}<br />
      Directions: {props.directions}<br />
    </div>
  );
}

RecipeDetail.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  slug: PropTypes.string,
  title: PropTypes.string,
  preparationTime: PropTypes.number,
  sideDish: PropTypes.string,
  ingredients: PropTypes.array,
  directions: PropTypes.string,
  servingCount: PropTypes.number,
};

export default RecipeDetail;
