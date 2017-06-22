import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reduxTest from '../components/ReduxTest/reducer';
import recipeListReducer from '../components/RecipeList/reducer';

const configureReducer = () =>
  combineReducers({
    routing: routerReducer,
    reduxTest,
    recipeList: recipeListReducer,
  });

export default configureReducer;
