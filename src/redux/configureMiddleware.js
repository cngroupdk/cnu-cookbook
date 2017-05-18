// @flow
import { createEpicMiddleware } from 'redux-observable';
import type { Middleware } from 'redux';

import configureDeps from './configureDeps';
import configureEpics from './configureEpics';
import type { Action, ActionDeps, Deps, StoreState } from '../types';

const injectMiddleware = (deps: Deps): Middleware<StoreState, Action> => ({
  dispatch,
  getState,
}) => next => (action: Action | ((deps: ActionDeps) => Action)) => {
  let theAction: Action;

  if (typeof action === 'function') {
    const actionInjectedDeps: ActionDeps = {
      ...deps,
      dispatch,
      getState,
    };

    theAction = action(actionInjectedDeps);
  } else {
    theAction = action;
  }

  return next(theAction);
};

const configureMiddleware = () => {
  const deps = configureDeps();
  const rootEpic = configureEpics(deps);

  const middleware = [injectMiddleware(deps), createEpicMiddleware(rootEpic)];

  return middleware;
};

export default configureMiddleware;
