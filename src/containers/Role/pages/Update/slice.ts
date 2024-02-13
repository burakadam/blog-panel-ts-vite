import { REDUCERS } from '@/constants/reducers';
import { IPermission } from '@/models/permission';
import { TRoleId, TRoleValues } from '@/models/role';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUpdateRoleInitialState {
  loading: boolean;
  error: string | null;
  permissions: IPermission[];
  success: boolean;
  role: TRoleValues | null;
}

const initialState: IUpdateRoleInitialState = {
  loading: false,
  error: null,
  permissions: [],
  success: false,
  role: null,
};

const roleUpdateSlice = createSlice({
  name: REDUCERS.ROLE_UPDATE,
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRoleDetailRequest(state, _action: PayloadAction<TRoleId>) {
      state.loading = true;
      state.error = null;
    },
    getRoleDetailSuccess(state, action) {
      state.loading = false;
      state.error = null;
      state.role = action.payload.role;
      state.permissions = action.payload.permissions;
    },
    getRoleDetailError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.role = null;
      state.permissions = [];
    },
  },
});

const roleUpdateActions = roleUpdateSlice.actions;

export { roleUpdateActions };
export default roleUpdateSlice.reducer;
