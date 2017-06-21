import React, { Component } from 'react';
import api from '../api';
import RecipeList from '../components/RecipeList/RecipeList';
import SearchBar from '../components/SearchBar/SearchBar';

class RecipeListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      filteredRecipes: [],
      isFetching: true,
      searchText: '',
    };

    this.handleSearchChange = this.handleSearchChange.bind(
      this,
    );
  }

  componentWillMount() {
    api.get('/recipes').then(response => {
      this.setState({
        recipes: response.data,
        filteredRecipes: response.data,
        isFetching: false,
      });
    });
  }

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

  render() {
    const {
      filteredRecipes,
      isFetching,
      searchText,
    } = this.state;

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
        <SearchBar
          text={searchText}
          onChange={this.handleSearchChange}
        />
        <RecipeList recipes={filteredRecipes} />
      </div>
    );
  }
}

export default RecipeListPage;
