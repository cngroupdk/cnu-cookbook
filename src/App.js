import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import configureStore from './redux/configureStore';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';

const store = configureStore({
  initialState: {},
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router
          history={browserHistory}
          render={applyRouterMiddleware(useScroll())}
          routes={routes}
        />
      </Provider>
    );
  }
}

export default App;
