import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, Checkbox, FormControl, FormGroup } from 'react-bootstrap';

function SearchBox(props) {
  return (
    <div>
      <FormGroup controlId="searchBox">
        <ControlLabel>Search</ControlLabel>
        <FormControl
          type="text"
          placeholder="E.g. svíčková"
          value={props.text}
          onChange={props.onTextChange}
        />
      </FormGroup>
      <Checkbox
        checked={props.quick}
        onChange={props.onQuickChange}
      >
        Only short recipes
      </Checkbox>
    </div>
  );
}

SearchBox.propTypes = {
  text: PropTypes.string,
  quick: PropTypes.bool.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onQuickChange: PropTypes.func.isRequired,
};

export default SearchBox;
