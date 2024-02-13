import { REDUCERS } from '@/constants/reducers';
import { IRole } from '@/models/role';
import { TUserValues } from '@/models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICreateUserInitialState {
  loading: boolean;
  error: string | null;
  roles: IRole[];
  success: boolean;
}

const initialState: ICreateUserInitialState = {
  loading: false,
  error: null,
  roles: [],
  success: false,
};

const userCreateSlice = createSlice({
  name: REDUCERS.USER_CREATE,
  initialState,
  reducers: {
    getRoleListRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getRoleListSuccess(state, action) {
      state.loading = false;
      state.roles = action.payload;
    },
    getRoleListError(state, action) {
      state.loading = false;
      state.roles = initialState.roles;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    postUserRequest(state, _action: PayloadAction<TUserValues>) {
      state.loading = true;
      state.error = null;
    },
    postUserSuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    postUserError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    resetState() {
      return { ...initialState };
    },
  },
});

const userCreateActions = userCreateSlice.actions;

export { userCreateActions };
export default userCreateSlice.reducer;
