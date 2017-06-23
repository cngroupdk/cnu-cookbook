import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe } from '../components/RecipeDetail/actions';
import RecipeDetail from '../components/RecipeDetail/RecipeDetail';
import Spinner from '../components/common/Spinner';

class RecipeDetailPage extends Component {
  componentWillMount() {
    this.props.fetchRecipe(this.props.params.slug);
  }

  render() {
    const { isFetching, recipe } = this.props;

    if (isFetching) {
      return <Spinner />;
    }

    if (!recipe) {
      return <div className="alert alert-danger">Not found</div>;
    }

    const { title, directions } = recipe;

    return <RecipeDetail title={title} directions={directions} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isFetching, recipesBySlug } = state.recipeDetail;
  const { slug } = ownProps.params;
  const recipe = recipesBySlug[slug];

  return {
    isFetching,
    recipe,
  };
};

const mapDispatchToProps = {
  fetchRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailPage);
