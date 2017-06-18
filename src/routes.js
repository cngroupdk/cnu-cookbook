import React from 'react';
import { IndexRoute, Route } from 'react-router';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/Home';
import ApiTestPage from './pages/ApiTest';
import NotFoundPage from './pages/NotFound';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={HomePage} />
    <Route path="api-test" component={ApiTestPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
