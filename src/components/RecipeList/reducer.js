import {
  FETCH_RECIPE_LIST_REQUEST,
  FETCH_RECIPE_LIST_SUCCESS,
} from './actions';

const initialState = {
  isFetching: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_RECIPE_LIST_SUCCESS: {
      const { items } = action.payload;

      return {
        ...state,
        isFetching: false,
        items,
      };
    }

    default:
      return state;
  }
};

export default reducer;
