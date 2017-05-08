import React, { Component } from 'react';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router
        history={browserHistory}
        render={applyRouterMiddleware(useScroll())}
        routes={routes}
      />
    );
  }
}

export default App;
