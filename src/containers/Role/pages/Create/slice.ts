import { REDUCERS } from '@/constants/reducers';
import { IPermission } from '@/models/permission';
import { createSlice } from '@reduxjs/toolkit';

export interface ICreateRoleInitialState {
  loading: boolean;
  error: string | null;
  permissions: IPermission[];
  success: boolean;
}

const initialState: ICreateRoleInitialState = {
  loading: false,
  error: null,
  permissions: [],
  success: false,
};

const roleCreateSlice = createSlice({
  name: REDUCERS.ROLE_CREATE,
  initialState,
  reducers: {
    getPermissionListRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getPermissionListSuccess(state, action) {
      state.loading = false;
      state.permissions = action.payload;
    },
    getPermissionListError(state, action) {
      state.loading = false;
      state.permissions = initialState.permissions;
      state.error = action.payload;
    },
  },
});

const roleCreateActions = roleCreateSlice.actions;

export { roleCreateActions };
export default roleCreateSlice.reducer;
