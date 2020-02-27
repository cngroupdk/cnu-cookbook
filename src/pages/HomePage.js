import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <Jumbotron>
      <h1>Welcome to CN Cookbook</h1>
      <p>Fresh code every day!</p>
      <p>
        <Link to="/recipes" className="btn btn-primary btn-lg">
          Go to recipe page
        </Link>
      </p>
      <p>
        <Link to="/api-test" className="btn btn-primary btn-lg">
          Jump to API Test Page
        </Link>
      </p>
    </Jumbotron>
  );
}
