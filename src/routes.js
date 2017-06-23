import React from 'react';
import { IndexRoute, Route } from 'react-router';
import MainLayout from './pages/MainLayout';
import ApiTestPage from './pages/ApiTestPage';
import ReduxTestPage from './pages/ReduxTestPage';
import NotFoundPage from './pages/NotFoundPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

export default (
  <Route path="/" component={MainLayout}>
    <IndexRoute component={RecipeListPage} />
    <Route path="recipe/:slug" component={RecipeDetailPage} />
    <Route path="api-test" component={ApiTestPage} />
    <Route path="redux-test" component={ReduxTestPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
