import api from '../../api';

export const RECIPE_LIST_FETCH_REQUEST = 'RECIPE_LIST.FETCH.REQUEST';
export const RECIPE_LIST_FETCH_SUCCESS = 'RECIPE_LIST.FETCH.SUCCESS';

export const fetchRecipesRequest = () => ({
  type: RECIPE_LIST_FETCH_REQUEST,
});

export const fetchRecipesSuccess = recipes => ({
  type: RECIPE_LIST_FETCH_SUCCESS,
  payload: {
    recipes,
  },
});

export const fetchRecipes = () => {
  return dispatch => {
    dispatch(fetchRecipesRequest());

    return api.get('/recipes').then(response => {
      dispatch(fetchRecipesSuccess(response.data));
    });
  };
};
