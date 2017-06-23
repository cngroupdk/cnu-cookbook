import api from '../../api';

export const RECIPE_FETCH_REQUEST = 'RECIPE.FETCH.REQUEST';
export const RECIPE_FETCH_SUCCESS = 'RECIPE.FETCH.SUCCESS';
export const RECIPE_FETCH_FAILURE = 'RECIPE.FETCH.FAILURE';

export const fetchRecipeRequest = () => ({
  type: RECIPE_FETCH_REQUEST,
});

export const fetchRecipeSuccess = (recipe, slug) => ({
  type: RECIPE_FETCH_SUCCESS,
  payload: {
    recipe,
    slug,
  },
});

export const fetchRecipe = slug => {
  return dispatch => {
    dispatch(fetchRecipeRequest());

    return api.get(`recipes/${slug}`).then(response => {
      dispatch(fetchRecipeSuccess(response.data, slug));
    });
  };
};
