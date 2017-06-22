import api from '../../api';

export const addRecipe = recipe => ({
  type: 'RECIPE_LIST.ADD_RECIPE',
  payload: {
    recipe,
  },
});

export const FETCH_RECIPE_REQUEST =
  'RECIPE_LIST.FETCH_RECIPE.REQUEST';
export const FETCH_RECIPE_SUCCESS =
  'RECIPE_LIST.FETCH_RECIPE.SUCCESS';

export const fetchRecipesRequest = () => ({
  type: FETCH_RECIPE_REQUEST,
});

export const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPE_SUCCESS,
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
