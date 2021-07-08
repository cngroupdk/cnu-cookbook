import React, { useState } from 'react';
import { Alert, Button, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap';

import { api } from '../api';

const DEFAULT_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

export function ApiTestPage() {
  const [{ data, isLoading, error }, setState] = useState(DEFAULT_STATE);
  const [id, setId] = useState('');

  function setFetchingState() {
    setState({
      isLoading: true,
      data: null,
      error: null,
    });
  }

  function onFetchSuccess({ data }) {
    setState({
      isLoading: false,
      data,
      error: null,
    });
  }

  function onFetchFailure({ message }) {
    setState({
      isLoading: false,
      data: null,
      error: message,
    });
  }

  function onLoadList() {
    setFetchingState();
    api.get('/recipes').then(onFetchSuccess).catch(onFetchFailure);
  }

  function onLoadDetail() {
    setFetchingState();
    api.get(`/recipes/${id}`).then(onFetchSuccess).catch(onFetchFailure);
  }

  function onReset() {
    setState(DEFAULT_STATE);
    setId('');
  }

  return (
    <>
      <h1>API Test Page</h1>
      <Form inline>
        <Button variant="primary" onClick={onLoadList}>
          Load List
        </Button>
        <span className="px-3">or</span>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Recipe ID"
              style={{ width: '250px' }}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={onLoadDetail} disabled={!id}>
                Load Detail
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <span className="mx-3">or</span>
          <Button variant="outline-secondary" onClick={onReset}>
            Reset
          </Button>
        </FormGroup>
      </Form>
      <br />

      {isLoading && (
        <>
          <i className="fa fa-spinner fa-spin" /> Loading&hellip;{' '}
        </>
      )}
      {!isLoading && error && (
        <Alert variant="danger">
          <Alert.Heading>{error}</Alert.Heading>
        </Alert>
      )}

      {!isLoading && data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
