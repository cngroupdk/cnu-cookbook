
const initialState = {
  x: 52,
}

const reducer = (
  state = initialState,
  action
) => {
  console.log('--- state', state, 'action', action);
  return state;
};

export default reducer;
