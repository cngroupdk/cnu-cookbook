import initialState from '../../redux/initialState';
import {
  RECIPE_LIST_FETCH_REQUEST,
  RECIPE_LIST_FETCH_SUCCESS,
} from './actions';

const reducer = (state = initialState.recipeList, action) => {
  switch (action.type) {
    case RECIPE_LIST_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case RECIPE_LIST_FETCH_SUCCESS: {
      const { recipes } = action.payload;

      return {
        ...state,
        isFetching: false,
        recipes,
      };
    }

    default:
      return state;
  }
};

export default reducer;
