// @flow
import { combineReducers } from 'redux';

import recipeListReducer from
'../components/RecipeList/reducer';

import type { Action, StoreState } from '../types';

const configureReducer = () => {
  const appReducer = combineReducers({
    recipeList: recipeListReducer,
    counter: (state = {}, action) => state,
  });

  const rootReducer = (storeState: StoreState, action: Action) => {
    let state: any = storeState;
    if (action.type === 'RESET_WHOLE_STORE_STATE') {
      state = undefined;
    }

    return appReducer(state, action);
  };

  return rootReducer;
};

export default configureReducer;
