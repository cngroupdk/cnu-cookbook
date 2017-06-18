import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import configureReducer from './configureReducer';

const rootReducer = configureReducer();

const middlewares = [thunk];

const configureStoreProd = initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

const configureStoreDev = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return store;
};

const configureStore = process.env.NODE_ENV === 'production'
  ? configureStoreProd
  : configureStoreDev;

export default configureStore;
