export default {
  reduxTest: {
    loadTime: String(new Date()),
    lastUpdate: null,
  },
  recipeList: {
    recipes: [],
    isFetching: false,
  },
  recipeDetail: {
    recipesBySlug: {},
    isFetching: false,
  },
};
