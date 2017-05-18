// @flow
import type { ActionsObservable } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import 'rxjs';

import type { Action, Deps, Epic, StoreState } from '../types';

const EPICS: Array<Epic> = [
  // ...travelledVehicleEpics,
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
