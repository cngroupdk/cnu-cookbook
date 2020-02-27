import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

export function RecipeListItem(props) {
  const { title, time, slug } = props;

  return (
    <Col xs="12" sm="6" md="4" lg="3" className="recipe">
      <Card>
        <Card.Header>
          <Link to={`/recipe/${slug}`}>
            <span>
              <i className="fa fa-cutlery"></i>
            </span>
            <span className="recipe-title">{title}</span>
          </Link>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <span>
              <i className="fa fa-clock-o"></i>
            </span>
            <span className="recipe-text">Preparation time: {time}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

RecipeListItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired
};

RecipeListItem.defaultProps = {
  time: 0
};
