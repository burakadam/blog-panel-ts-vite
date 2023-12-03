import { createSlice } from '@reduxjs/toolkit';

import { REDUCERS } from '@/constants/reducers';

interface IAuthInitialState {
  token: string | null;
  userEmail: string | null;
  loadings: { [key: string]: boolean | null };
  errors: { [key: string]: boolean | null };
}

const initialState: IAuthInitialState = {
  token: null,
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
  reducers: {},
});

const authActions = authSlice.actions;

export { authActions, initialState };

export default authSlice.reducer;
