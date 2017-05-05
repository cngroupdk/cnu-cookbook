import React, { Component } from 'react';
import { Alert, PageHeader } from 'react-bootstrap';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <PageHeader>404</PageHeader>
        <Alert bsStyle="warning">
          This is not the page you are looking for.
        </Alert>
      </div>
    );
  }
}

export default NotFoundPage;
