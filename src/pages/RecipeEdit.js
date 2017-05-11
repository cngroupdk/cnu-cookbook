import React, { Component } from 'react';
import api from '../api';
import Loader from '../components/Common/Loader';

class RecipeEditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {},
      isFetching: true,
      isSaving: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      isSaving: true,
    });

    api()
      .post(`/recipes/${this.state.recipe._id}`, {
        title: this.state.recipe.title,
      })
      .then(response => {
        // This is a redirection back to the detail
        this.props.router.push(`/recipe/${response.data.slug}`);
      });
  }

  render() {
    // This render servers only as an example how to submit a form
    // Page component should have minimal markup as possible, use components

    const { isFetching, recipe } = this.state;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <div>
        <div>EDIT: {recipe.title}</div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default RecipeEditPage;
