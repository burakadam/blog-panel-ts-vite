import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import { REDUCERS } from '@/constants/reducers';
import { ILogin } from '@/services/auth/api';

interface IAuthInitialState {
  token: string | null;
  userEmail: string | null;
  loadings: { [key: string]: boolean | null };
  errors: { [key: string]: boolean | null };
}

const initialState: IAuthInitialState = {
  token: localStorage.getItem(LOCAL_STORAGE.USER_TOKEN),
  userEmail: null,
  loadings: {
    login: false,
    fetchUserData: false,
  },
  errors: {
    login: null,
    fetchUserData: null,
  },
};

const authSlice = createSlice({
  name: REDUCERS.AUTH,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginRequest(state, _action: PayloadAction<ILogin>) {
      state.loadings.login = true;
      state.errors.login = initialState.errors.login;
    },
    loginSuccess(state, action: PayloadAction<{ token: string }>) {
      state.token = action.payload.token;
      state.loadings.login = initialState.loadings.login;
      state.errors.login = initialState.errors.login;
    },
    loginError(_, action) {
      return { ...initialState, token: null, error: action.payload.error };
    },
  },
});

const authActions = authSlice.actions;

export { authActions, initialState };

export default authSlice.reducer;
