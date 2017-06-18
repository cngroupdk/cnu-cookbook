import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to CN University</h1>
        <p>Fresh code every day!</p>
        <p>
          <Link to="/api-test" className="btn btn-primary btn-lg">
            API Test Page
          </Link>
        </p>
      </Jumbotron>
    );
  }
}

export default HomePage;