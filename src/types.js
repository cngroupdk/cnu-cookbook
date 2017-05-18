// @flow
import type { Dispatch } from 'redux';
import type { ActionsObservable } from 'redux-observable';
import type { Observable } from 'rxjs';
import type { CancelToken } from 'axios';

import type { ApiObject, ApiResponse } from './api';
import type { CommonAction } from './components/common/actions';

// - basic API data types - //

// ~ basic API data types ~ //


// - API - //

export type ApiUrl =
  | 'sailing/GetSailings';

export type ApiData = any;

// ~ API ~ //


// - react-native - //

export type ImageSrcRequireType = number;
export type Style = { [key: string]: string | number } | false | null;

// ~ react-native ~ //


// - redux - //

export type StoreState = {|
|};

type TestActions = {| type: 'INIT' |};

export type Action =
  | CommonAction
  | TestActions
  ;

export type Deps = {
  +api: ApiObject,
  +apiCancelToken: Class<CancelToken>,
};

export type EpicDeps = {
  +getState: () => StoreState,
} & Deps;

export type ActionDeps = {
  +dispatch: Dispatch<Action>,
  +getState: () => StoreState,
} & Deps;

export type Epic = (
  $action: ActionsObservable<Action>,
  deps: EpicDeps,
) => Observable<Action>;

// ~ redux ~ //


// - utils - //

// eslint-disable-next-line no-unused-vars
export function ensureExhaustSwitchByFlow(caseValue: empty) {
  // Makes sure that we have all `case`-es in `switch`.
  //
  // For more info see:
  // http://ouicar.github.io/2016/08/08/exhaustive-switch.html
  // (implementation has been improved)
}

// ~ utils ~ //
