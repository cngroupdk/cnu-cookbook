import React from 'react';
import { Navbar } from 'react-bootstrap';
import { IndexLink } from 'react-router';

function AppNavbar() {
  return (
    <Navbar staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/">Cookbook</IndexLink>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
}

export default AppNavbar;
