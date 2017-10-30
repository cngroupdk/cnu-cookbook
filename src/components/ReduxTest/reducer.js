import { UPDATE } from './actions';

const initialState = {
  loadTime: String(new Date()),
  lastUpdate: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE: {
      const { lastUpdate } = action.payload;

      return {
        ...state,
        lastUpdate,
      };
    }

    default:
      return state;
  }
};

export default reducer;
