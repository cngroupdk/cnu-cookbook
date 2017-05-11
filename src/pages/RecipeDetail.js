import React, { Component } from 'react';
import RecipeDetail from '../components/RecipeDetail/RecipeDetail';
import api from '../api';

class RecipeDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      isFetching: true,
    };
  }

  componentWillMount() {
    api()
      .get(`/recipes/${this.props.params.slug}`)
      .then((response) => {
        this.setState({
          recipe: response.data,
          isFetching: false,
        });
      });
  }

  render() {
    const { recipe, isFetching } = this.state;

    return (
      <RecipeDetail
        isFetching={isFetching}
        slug={recipe.slug}
        title={recipe.title}
        preparationTime={recipe.preparationTime}
        sideDish={recipe.sideDish}
        ingredients={recipe.ingredients}
        directions={recipe.directions}
        servingCount={recipe.servingCount}
      />
    );
  }
}

export default RecipeDetailPage;
