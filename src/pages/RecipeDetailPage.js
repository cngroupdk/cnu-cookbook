import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import { api } from "../api";
import { RecipeDetail } from "../components/RecipeDetail/RecipeDetail";

export class RecipeDetailPage extends Component {
  state = {
    isLoading: false,
    recipe: null,
    error: null
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });

    const { params } = this.props.match || {};
    const { slug } = params || {};

    api.get(`/recipes/${slug}`).then(response => {
      const { data, problem } = response;
      this.setState({
        isLoading: false,
        recipe: data,
        error: problem
      });
    });
  }

  render() {
    const { isLoading, recipe, error } = this.state;

    return (
      <Container>
        <RecipeDetail isLoading={isLoading} recipe={recipe} error={error} />
      </Container>
    );
  }
}

RecipeDetailPage.propTypes = {
  match: PropTypes.object.isRequired
};
