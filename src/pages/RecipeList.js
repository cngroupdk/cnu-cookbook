import React, { Component } from 'react';
import { Link } from 'react-router';

import RecipeList from '../components/RecipeList/RecipeList';
import SearchBox from '../components/SearchBox/SearchBox';


import { connect } from 'react-redux';
import {
  recipeListFetch,
  recipeListFetchSuccess,
} from '../components/RecipeList/actions';


class RecipeListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      searchQuick: false,
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchQuickChange = this.handleSearchQuickChange.bind(this);
  }

  componentWillMount() {
    const { recipeListFetch } = this.props;
    recipeListFetch();
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
    const {
      isLoading,
      recipes,
    } = this.props;

    const {
      searchText,
      searchQuick,
    } = this.state;

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
          isFetching={isLoading}
          recipes={filteredRecipes}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    isLoading,
    recipes,
  } = state.recipeList;

  return {
    isLoading,
    recipes,
  }
}

export default connect(
  mapStateToProps,
  {
    recipeListFetch,
    recipeListFetchSuccess,
  }
)(RecipeListPage);









///
