import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <Jumbotron>
      <h1>Whoops!</h1>
      <h4>We couldn't find the page you are looking for.</h4>
      <p>
        <Link to="/" className="btn btn-primary btn-lg">
          Go to Home Page
        </Link>
      </p>
    </Jumbotron>
  );
}
