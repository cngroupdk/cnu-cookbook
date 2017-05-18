
const initialState = {
  isLoading: false,
  recipes: [],
}

const reducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'RECIPE_LIST.FETCH':
      return {
        ...state,
        isLoading: true,
      };

    case 'RECIPE_LIST.FETCH.SUCCESS': {
      const { recipes } = action.payload;

      return {
        ...state,
        isLoading: false,
        recipes,
      }
    }

    default:
      return state;
  }
};

export default reducer;
