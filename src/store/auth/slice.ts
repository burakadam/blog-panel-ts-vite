import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import { REDUCERS } from '@/constants/reducers';
import { ILogin } from '@/services/auth/api';

interface IInitialState {
  token: string | null;
  userEmail: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IInitialState = {
  token: localStorage.getItem(LOCAL_STORAGE.USER_TOKEN),
  userEmail: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: REDUCERS.AUTH,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    loginRequest(state, _action: PayloadAction<ILogin>) {
      state.loading = true;
      state.error = initialState.error;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.loading = initialState.loading;
      state.error = initialState.error;
    },
    loginError(_, action) {
      return { ...initialState, token: null, error: action.payload.error };
    },
    logout() {
      return { ...initialState, token: null };
    },
  },
});

const authActions = authSlice.actions;

export { authActions, initialState };

export default authSlice.reducer;
