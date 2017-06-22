import initialState from '../../redux/initialState';
import {
  FETCH_RECIPE_REQUEST,
  FETCH_RECIPE_SUCCESS,
} from './actions';

const reducer = (
  state = initialState.recipeList,
  action,
) => {
  switch (action.type) {
    case 'RECIPE_LIST.ADD_RECIPE': {
      const { recipe } = action.payload;

      return {
        ...state,
        recipes: [...state.recipes, recipe],
      };
    }

    case FETCH_RECIPE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recipes: action.payload.recipes,
      };

    default:
      return state;
  }
};

export default reducer;
