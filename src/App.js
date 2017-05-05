import React, { Component } from 'react';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router
        history={browserHistory}
        render={applyRouterMiddleware(useScroll())}
        routes={Routes}
      />
    );
  }
}

export default App;
