/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import { REDUCERS } from '@/constants/reducers';
import { ILogin, IUser, TUserProfileValues } from '@/models/user';

export interface IAuthInitialState {
  token: string | null;
  loadings: {
    login: boolean;
    userData: boolean;
    profile: boolean;
  };
  errors: {
    login: string | null;
    userData: string | null;
    profile: string | null;
  };
  user: IUser | object;
}

const initialState: IAuthInitialState = {
  token: localStorage.getItem(LOCAL_STORAGE.USER_TOKEN),
  loadings: {
    login: false,
    userData: true,
    profile: false,
  },
  errors: {
    login: null,
    userData: null,
    profile: null,
  },
  user: {},
};

const authSlice = createSlice({
  name: REDUCERS.AUTH,
  initialState,
  reducers: {
    loginRequest(state, _action: PayloadAction<ILogin>) {
      state.loadings.login = true;
      state.errors.login = null;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.loadings.login = false;
      state.errors.login = null;
      state.user = action.payload;
    },
    loginError(state, action) {
      state.errors.login = action.payload;
      state.loadings.login = false;
    },
    logout() {
      return { ...initialState, token: null };
    },
    getUserDataRequest(state) {
      state.loadings.userData = true;
      state.errors.userData = null;
    },
    getUserDataSuccess(state, action) {
      state.loadings.userData = false;
      state.errors.userData = null;
      state.user = action.payload;
    },
    getUserDataError(state, action) {
      state.loadings.userData = false;
      state.errors.userData = action.payload;
    },
    updateUserProfileRequest(
      state,
      _action: PayloadAction<TUserProfileValues | FormData>
    ) {
      state.loadings.profile = true;
    },
    updateUserProfileSuccess(state, action) {
      state.loadings.profile = false;
      state.errors.profile = null;
      state.user = action.payload;
    },
    updateUserProfileError(state, action) {
      state.loadings.profile = false;
      state.errors.profile = action.payload;
    },
  },
});

const authActions = authSlice.actions;

export { authActions, initialState };

export default authSlice.reducer;
