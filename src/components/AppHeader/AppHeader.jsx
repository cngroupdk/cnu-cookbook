import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function AppHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Cookbook</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
