// @flow
import { applyMiddleware, compose, createStore } from 'redux';

import configureMiddleware from './configureMiddleware';
import configureReducer from './configureReducer';

type Options = {
  initialState?: Object,
};

const configureStore = (options: Options) => {
  const { initialState } = options;

  const reduxDevtoolsExtensionCompose =
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle

  const composeEnhancers = reduxDevtoolsExtensionCompose
    ? reduxDevtoolsExtensionCompose({})
    : compose;

  const reducer = configureReducer();
  const middleware = configureMiddleware();

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  return store;
};

export default configureStore;
