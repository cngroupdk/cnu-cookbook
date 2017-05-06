import React, { Component } from 'react';
import api from '../api';

class ApiTestPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      recipes: [],
    };
  }

  componentWillMount() {
    api()
      .get('/recipes')
      .then(response => this.setState({
        isFetching: false,
        recipes: response.data,
      }));
  }

  render() {
    const { isFetching, recipes } = this.state;

    return (
      <div>
        {isFetching ?
          <span><i className="fa fa-spinner fa-spin" /> Loading&hellip;</span> :
          <pre>{JSON.stringify(recipes)}</pre>
        }
      </div>
    );
  }
}

export default ApiTestPage;
