import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reduxTest from '../components/ReduxTest/reducer';
import recipeList from '../components/RecipeList/reducer';
import recipeDetail from '../components/RecipeDetail/reducer';

const configureReducer = () =>
  combineReducers({
    routing: routerReducer,
    reduxTest,
    recipeList,
    recipeDetail,
  });

export default configureReducer;
