import React from 'react';
import { IndexRoute, Route } from 'react-router';
import AppPage from './pages/App';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

export default (
  <Route path="/" component={AppPage}>
    <IndexRoute component={HomePage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
