// @flow
import { CancelToken } from 'axios';
import {
  create,
  NONE,
  CLIENT_ERROR,
  SERVER_ERROR,
  TIMEOUT_ERROR,
  CONNECTION_ERROR,
  NETWORK_ERROR,
  UNKNOWN_ERROR,
  CANCEL_ERROR,
} from 'apisauce';
import type { AxiosXHRConfig } from 'axios';

import { API_BASE_URL } from './appConfig';
import type { ApiUrl, ApiData } from './types';

export type ApiResponse<T> = {
  ok: boolean,
  problem:
    | NONE
    | CLIENT_ERROR
    | SERVER_ERROR
    | TIMEOUT_ERROR
    | CONNECTION_ERROR
    | NETWORK_ERROR
    | UNKNOWN_ERROR
    | CANCEL_ERROR,
  data: T,
  status: number,
  headers: Object,
  config: AxiosXHRConfig<T>,
  duration: number,
};

type ApiPromise<T> = Promise<ApiResponse<T>>;

type ApiParamsMethod<T> = (
  url: ApiUrl,
  params: ?Object,
  axiosConfig: ?Object,
) => ApiPromise<T>;

type ApiDataMethod<T> = (
  url: ApiUrl,
  data: ?Object,
  axiosConfig: ?Object,
) => ApiPromise<T>;

export type ApiObjectT<T> = {
  // params methods
  get: ApiParamsMethod<T>,
  head: ApiParamsMethod<T>,
  delete: ApiParamsMethod<T>,
  link: ApiParamsMethod<T>,
  unlink: ApiParamsMethod<T>,

  // data methods
  post: ApiDataMethod<T>,
  put: ApiDataMethod<T>,
  patch: ApiDataMethod<T>,
  setHeader: (key: string, value: ?string) => void,
};

export type ApiObject = ApiObjectT<ApiData>;

const api: ApiObject = create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: undefined,
  },
});

export { CancelToken };
export default api;
