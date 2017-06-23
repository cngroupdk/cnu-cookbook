import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../components/RecipeList/actions';
import RecipeList from '../components/RecipeList/RecipeList';
import SearchBar from '../components/SearchBar/SearchBar';
import Spinner from '../components/common/Spinner';

class RecipeListPage extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  render() {
    const { recipes, isFetching } = this.props;

    if (isFetching) {
      return <Spinner />;
    }

    return (
      <div>
        <SearchBar />
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { recipes, isFetching } = state.recipeList;

  return {
    recipes,
    isFetching,
  };
};

const mapDispatchToProps = {
  fetchRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListPage);
