// @flow
import type { ActionsObservable } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import 'rxjs';

import type { Action, Deps, Epic, StoreState } from '../types';

import { epics as recipeListEpics } from
  '../components/RecipeList/actions';

const EPICS: Array<Epic> = [
  ...recipeListEpics,
];

const configureEpics = (deps: Deps, epics: Array<Epic> = EPICS) => (
  action$: ActionsObservable<Action>,
  { getState }: { getState(): StoreState },
) =>
  combineEpics(...epics)(action$, {
    ...deps,
    getState,
  });

export default configureEpics;
