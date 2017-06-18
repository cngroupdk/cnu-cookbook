import React from 'react';
import PropTypes from 'prop-types';
import { Button, PageHeader } from 'react-bootstrap';

const ReduxTest = ({ loadTime, lastUpdate, onUpdate }) =>
  <div>
    <PageHeader>Redux Test Page</PageHeader>

    <p>Load time: {loadTime}</p>
    <p>Last update: {lastUpdate}</p>
    <Button bsStyle="primary" onClick={onUpdate}>Update</Button>
  </div>;

ReduxTest.propTypes = {
  loadTime: PropTypes.string.isRequired,
  lastUpdate: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
};

export default ReduxTest;
