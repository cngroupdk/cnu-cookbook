import initialState from '../../redux/initialState';
import { RECIPE_FETCH_REQUEST, RECIPE_FETCH_SUCCESS } from './actions';

const reducer = (state = initialState.recipeDetail, action) => {
  switch (action.type) {
    case RECIPE_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case RECIPE_FETCH_SUCCESS: {
      const { recipe, slug } = action.payload;

      return {
        ...state,
        isFetching: false,
        recipesBySlug: {
          ...state.recipesBySlug,
          [slug]: recipe,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
