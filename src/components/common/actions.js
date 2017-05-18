// @flow

export type CommonAction = { type: 'RESET_WHOLE_STORE_STATE' };

export const resetWholeStoreState = (): CommonAction => ({
  type: 'RESET_WHOLE_STORE_STATE',
});
