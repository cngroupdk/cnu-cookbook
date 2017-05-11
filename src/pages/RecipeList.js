import React, { Component } from 'react';
import { Link } from 'react-router';
import api from '../api';
import RecipeList from '../components/RecipeList/RecipeList';
import SearchBox from '../components/SearchBox/SearchBox';

class RecipeListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      recipes: [],
      searchText: '',
      searchQuick: false,
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchQuickChange = this.handleSearchQuickChange.bind(this);
  }

  componentWillMount() {
    api()
      .get('/recipes')
      .then((response) => {
        this.setState({
          isFetching: false,
          recipes: response.data,
        });
      });
  }

  handleSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleSearchQuickChange(event) {
    this.setState({
      searchQuick: event.target.checked,
    });
  }

  render() {
    const { isFetching, recipes, searchText, searchQuick } = this.state;

    const filteredRecipes = !searchText && !searchQuick
      ? recipes
      : recipes.filter(recipe => {
          let include = true;
          if (searchText) {
            include = recipe.title.toLowerCase().includes(searchText.toLowerCase());
          }

          if (searchQuick) {
            include = include && recipe.preparationTime <= 30;
          }

          return include;
        });

    return (
      <div>
        <p>
          <Link to="/api-test" className="btn btn-primary btn-lg">
            API Test Page
          </Link>
        </p>

        <SearchBox
          text={searchText}
          quick={searchQuick}
          onTextChange={this.handleSearchTextChange}
          onQuickChange={this.handleSearchQuickChange}
        />

        <RecipeList
          isFetching={isFetching}
          recipes={filteredRecipes}
        />
      </div>
    );
  }
}

export default RecipeListPage;
