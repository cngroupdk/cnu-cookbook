import initialState from '../../redux/initialState';
import { UPDATE } from './actions';

const reducer = (state = initialState.reduxTest, action) => {
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
