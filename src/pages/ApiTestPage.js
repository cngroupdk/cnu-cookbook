import React, { useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormControl,
  FormGroup,
  InputGroup
} from "react-bootstrap";

import { api } from "../api";

const DEFAULT_STATE = {
  id: "",
  isFetching: false,
  data: null,
  error: null
};

export function ApiTestPage() {
  const [state, setState] = useState(DEFAULT_STATE);
  const { id, isFetching, data, error } = state;

  const setFetchingState = () =>
    setState({
      id,
      isFetching: true,
      data: null,
      error: null
    });

  const handleLoadListClick = () => {
    setFetchingState();
    api.get("/recipes").then(({ data, problem }) => {
      setState({
        id,
        isFetching: false,
        data,
        error: problem
      });
    });
  };

  const handleIdChange = event =>
    setState({
      id: event.target.value,
      isFetching,
      data,
      error
    });

  const handleLoadDetailClick = () => {
    setFetchingState();
    api.get(`/recipes/${id}`).then(({ data, problem }) => {
      setState({
        id,
        isFetching: false,
        data,
        error: problem
      });
    });
  };

  const handleResetClick = () => setState(DEFAULT_STATE);

  return (
    <div>
      <div className="page-header">
        <h1>API Test Page</h1>
      </div>
      <Form inline>
        <Button variant="primary" onClick={handleLoadListClick}>
          Load List
        </Button>
        <span style={{ padding: "0 16px" }}>or</span>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={id}
              onChange={handleIdChange}
              placeholder="Enter Recipe ID"
              style={{ width: "250px" }}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={handleLoadDetailClick}
                disabled={!id}
              >
                Load Detail
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <span style={{ padding: "0 16px" }}>or</span>
          <Button variant="outline-secondary" onClick={handleResetClick}>
            Reset
          </Button>
        </FormGroup>
      </Form>
      <br />
      {renderResults(isFetching, data, error)}
    </div>
  );
}

function renderResults(isFetching, data, error) {
  if (isFetching) {
    return (
      <span>
        <i className="fa fa-spinner fa-spin" /> Loading&hellip;
      </span>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">
        <Alert.Heading>{error}</Alert.Heading>
      </Alert>
    );
  }

  if (data) {
    return <pre>{JSON.stringify(data, " ", 2)}</pre>;
  }

  return null;
}
