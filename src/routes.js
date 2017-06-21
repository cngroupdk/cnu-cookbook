import React from 'react';
import { IndexRoute, Route } from 'react-router';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/Home';
import ApiTestPage from './pages/ApiTest';
import ReduxTestPage from './pages/ReduxTest';
import NotFoundPage from './pages/NotFound';
import RecipeListPage from './pages/RecipeListPage';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={RecipeListPage} />
    <Route path="api-test" component={ApiTestPage} />
    <Route path="redux-test" component={ReduxTestPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
