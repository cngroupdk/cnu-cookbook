import React from 'react';
import { IndexLink, Link } from 'react-router';

const AppNavbar = () =>
  <nav className="navbar navbar-default navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <IndexLink to="/" className="navbar-brand">Cookbook</IndexLink>
      </div>

      <ul className="nav navbar-nav">
        <li><Link to="/api-test">Api Test</Link></li>
        <li><Link to="/redux-test">Redux Test</Link></li>
      </ul>
    </div>
  </nav>;

export default AppNavbar;
