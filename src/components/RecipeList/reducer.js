import initialState from '../../redux/initialState';

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

    default:
      return state;
  }
};

export default reducer;
