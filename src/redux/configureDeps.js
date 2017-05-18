// @flow
import api, { CancelToken } from '../api';
import type { Deps } from '../types';

const configureDeps = (): Deps => ({
  api,
  apiCancelToken: CancelToken,
});

export default configureDeps;
