// @flow

// eslint-disable-next-line arrow-parens
const createNamedWrapperReducer = <S, A>(
  reducerFunction: (state: S, action: A) => S,
  reducerName: string,
): ((state: S, action: any) => S) => {
  type ActionWithTypeAndName = A & { name: string, type: string };

  return (state: S, action: ActionWithTypeAndName): S => {
    const { name, type } = action;

    const isActionWithNameOfReducer = name === reducerName;
    const isInitAction = type.startsWith('@@redux/') || type === '@@INIT';
    const isCustomResetAction = type === 'RESET_WHOLE_STORE_STATE';

    if (isActionWithNameOfReducer || isInitAction || isCustomResetAction) {
      return reducerFunction(state, action);
    }

    return state;
  };
};

export default createNamedWrapperReducer;
