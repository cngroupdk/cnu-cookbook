
export const recipeListFetch = () => ({
  type: 'RECIPE_LIST.FETCH',
});

export const recipeListFetchSuccess = (recipes) => ({
  type: 'RECIPE_LIST.FETCH.SUCCESS',
  payload: {
    // "recipes": recipes,
    recipes,
  },
});
