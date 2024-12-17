import { createSlice } from '@reduxjs/toolkit';

import { Storage } from '@/shared/utils';

export interface AuthenticationState {
  isAuthenticated: boolean;
  mfaLoginToken?: string;
}

const initialState: AuthenticationState = {
  isAuthenticated: Storage.local.get('isAuthenticated') || false,
};

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setLoginState: (state, action) => {
      Storage.local.set('token', action.payload.token);
      Storage.local.set('isAuthenticated', true);

      state.isAuthenticated = true;
      state.mfaLoginToken = undefined;

      if (action.payload?.redirect) {
        window.location.href = action.payload.redirect as string;
      }
    },

    setMfaLoginTokenState: (state, action) => {
      state.mfaLoginToken = action.payload;
    },

    setLogoutState: (state) => {
      Storage.local.remove('isAuthenticated');
      Storage.local.remove('token');
      state.isAuthenticated = false;
    },
  },
});

export const { setLoginState, setMfaLoginTokenState, setLogoutState } = AuthenticationSlice.actions;

export const authenticationReducer = AuthenticationSlice.reducer;
