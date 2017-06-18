import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reduxTest from '../components/ReduxTest/reducer';

const configureReducer = () =>
  combineReducers({
    routing: routerReducer,
    reduxTest,
  });

export default configureReducer;
