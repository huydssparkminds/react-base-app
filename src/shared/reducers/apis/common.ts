/* eslint-disable @typescript-eslint/no-explicit-any */

import { BaseQueryApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query';

import { setLogoutState } from '@/shared/reducers/states';
import { Storage } from '@/shared/utils';

export const baseQuery = (baseUrl: string) =>
  fetchBaseQuery({
    baseUrl,
    timeout: 10000,
    prepareHeaders: (headers) => {
      const token = Storage.local.get('token');
      const location = Storage.session.get('location');
      if (token) headers.set('authorization', `Bearer ${token}`);
      if (location) headers.set('x-location', encodeURIComponent(location));
      return headers;
    },
  });

export const fetchAuthBaseQuery =
  (baseUrl: string) => async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
    const result = await baseQuery(baseUrl)(args, api, extraOptions);

    if (result.error?.status === 401) {
      // api.dispatch(setLogoutState());
    }

    return result;
  };

export const getErrorMessage = (error: any) => {
  const message = error?.data?.message || error?.data?.error || error?.data || error?.error || error?.message || error;

  if (typeof message === 'string' && message.startsWith('error.login.failed.locked.')) {
    return 'error.login.failed.locked.';
  }

  if (typeof message === 'object') {
    return message[0];
  }

  return message;
};

export const getErrorStatus = (error: any) => {
  return error?.status || error?.error?.status || error;
};
