import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ApiTestPage } from './pages/ApiTestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeListPage } from './pages/RecipeListPage';
// import { RecipeDetailPage } from './pages/RecipeDetailPage';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RecipeListPage} />
      {/*<Route path="/recept/:slug" component={RecipeDetailPage} />*/}
      <Route path="/api-test" component={ApiTestPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
