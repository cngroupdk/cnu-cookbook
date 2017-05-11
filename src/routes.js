import React from 'react';
import { IndexRoute, Route } from 'react-router';
import AppPage from './pages/App';
import ApiTestPage from './pages/ApiTest';
import NotFoundPage from './pages/NotFound';
import RecipeListPage from './pages/RecipeList';
import RecipeDetailPage from './pages/RecipeDetail';
import RecipeEditPage from './pages/RecipeEdit';

export default (
  <Route path="/" component={AppPage}>
    <IndexRoute component={RecipeListPage} />
    <Route path="api-test" component={ApiTestPage} />
    <Route path="recipe/:slug" component={RecipeDetailPage} />
    <Route path="recipe/:slug/edit" component={RecipeEditPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
