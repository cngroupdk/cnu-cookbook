import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class HomePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to CN University</h1>
        <p>Fresh code every day!</p>
      </Jumbotron>
    );
  }
}

export default HomePage;
