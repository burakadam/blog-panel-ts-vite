import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import { REDUCERS } from '@/constants/reducers';
import { ILogin } from '@/services/auth/api';

export interface IAuthInitialState {
  token: string | null;
  userEmail: string | null;
  loadings: {
    login: boolean;
    userData: boolean;
  };
  error: string | null;
}

const initialState: IAuthInitialState = {
  token: localStorage.getItem(LOCAL_STORAGE.USER_TOKEN),
  userEmail: null,
  loadings: {
    login: false,
    userData: true,
  },
  error: null,
};

const authSlice = createSlice({
  name: REDUCERS.AUTH,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginRequest(state, _action: PayloadAction<ILogin>) {
      state.loadings.login = true;
      state.error = initialState.error;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.loadings.login = initialState.loadings.login;
      state.error = initialState.error;
      state.userEmail = action.payload.email;
    },
    loginError(_, action) {
      return { ...initialState, token: null, error: action.payload.error };
    },
    logout() {
      return { ...initialState, token: null };
    },
    getUserDataRequest(state) {
      state.loadings.userData = true;
      state.error = initialState.error;
    },
    getUserDataSuccess(state, action) {
      state.loadings.userData = false;
      state.error = initialState.error;
      state.userEmail = action.payload.email;
    },
    getUserDataError(_, action) {
      return { ...initialState, token: null, error: action.payload.error };
    },
  },
});

const authActions = authSlice.actions;

export { authActions, initialState };

export default authSlice.reducer;
