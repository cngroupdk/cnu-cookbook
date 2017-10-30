import api from '../../api';

export const FETCH_RECIPE_LIST_REQUEST = 'FETCH_RECIPE_LIST_REQUEST';
export const FETCH_RECIPE_LIST_SUCCESS = 'FETCH_RECIPE_LIST_SUCCESS';

export const fetchRecipeListRequest = () => ({
  type: FETCH_RECIPE_LIST_REQUEST,
});

export const fetchRecipeListSuccess = items => ({
  type: FETCH_RECIPE_LIST_SUCCESS,
  payload: {
    items,
  },
});

export const fetchRecipeList = () => (dispatch, getState) => {
  dispatch(fetchRecipeListRequest());

  return api.get('/recipes').then(response => {
    console.log(getState());

    dispatch(fetchRecipeListSuccess(response.data));
  });
};
