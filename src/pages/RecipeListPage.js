import React, { Component } from "react";
import { Container } from "react-bootstrap";

import { api } from "../api";

import { RecipeList } from "../components/RecipeList/RecipeList";
import { SearchBar } from "../components/RecipeList/SearchBar";

export class RecipeListPage extends Component {
  state = {
    recipes: [],
    isLoading: false,
    error: null,
    searchString: "",
    isChecked: false
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    api.get("/recipes").then(response => {
      const { data, problem } = response;
      this.setState({
        isLoading: false,
        recipes: data,
        error: problem
      });
    });
  }

  handleInputChange = event => {
    this.setState({
      searchString: event.target.value
    });
  };

  handleCheckboxChange = event => {
    this.setState({
      isChecked: event.target.checked
    });
  };

  filterRecipes = recipe => {
    const { searchString, isChecked } = this.state;
    const { title, preparationTime } = recipe;
    const isInTimeFrame = !isChecked || preparationTime < 30;
    const containsSearchString =
      title.toLowerCase().indexOf(searchString.toLowerCase()) > -1;

    return isInTimeFrame && containsSearchString;
  };

  render() {
    const { recipes, isLoading, error, searchString, isChecked } = this.state;
    const filteredRecipes = recipes.filter(this.filterRecipes);

    return (
      <Container>
        <h1>Recipe List</h1>
        <SearchBar
          value={searchString}
          isChecked={isChecked}
          onInputChange={this.handleInputChange}
          onCheckboxChange={this.handleCheckboxChange}
        />
        <RecipeList
          recipes={filteredRecipes}
          isLoading={isLoading}
          error={error}
        />
      </Container>
    );
  }
}
