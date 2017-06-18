export const UPDATE = 'REDUX_TEST.UPDATE';

export const update = lastUpdate => ({
  type: UPDATE,
  payload: {
    lastUpdate,
  },
});
