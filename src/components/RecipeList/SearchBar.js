import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export function SearchBar(props) {
  const { value, isChecked, onInputChange, onCheckboxChange } = props;
  return (
    <Form>
      <Form.Group controlId="formSearch">
        <Form.Label>Search recipes</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={onInputChange}
          placeholder="Start typing recipe name"
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="formTime">
        <Form.Check
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
          label="Ready in less than 30 minutes"
        ></Form.Check>
      </Form.Group>
    </Form>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  value: "",
  isChecked: false
};
