import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { IndexLink } from 'react-router';

class AppNavbar extends Component {
  render() {
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
}

export default AppNavbar;
