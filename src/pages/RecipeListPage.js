import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../api';
import RecipeList from '../components/RecipeList/RecipeList';
import SearchBar from '../components/SearchBar/SearchBar';
import { addRecipe } from '../components/RecipeList/actions';

class RecipeListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(
      this,
    );
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentWillMount() {}

  handleSearchChange(event) {
    const { recipes } = this.state;
    let { value } = event.target;

    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    this.setState({
      searchText: value,
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.includes(value),
      ),
    });
  }

  handleAddClick() {
    const newRecipe = {
      _id: Math.random(),
      title: 'Recept ' + new Date(),
    };
    this.props.reduxAddRecipe(newRecipe);
  }

  render() {
    const { recipesFromRedux, isFetching } = this.props;
    const { searchText } = this.state;

    if (isFetching) {
      return (
        <div>
          Loading...{' '}
          <i className="fa fa-spin fa-spinner" />
        </div>
      );
    }

    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleAddClick}
        >
          Přidat recept
        </button>
        <SearchBar
          text={searchText}
          onChange={this.handleSearchChange}
        />
        <RecipeList recipes={recipesFromRedux} />
      </div>
    );
  }
}

const mapReduxStoreToProps = reduxStore => {
  return {
    recipesFromRedux: reduxStore.recipeList.recipes,
    isFetching: reduxStore.recipeList.isFetching,
  };
};

const mapActionsToProps = {
  reduxAddRecipe: addRecipe,
};

export default connect(
  mapReduxStoreToProps,
  mapActionsToProps,
)(RecipeListPage);
