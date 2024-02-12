import { REDUCERS } from '@/constants/reducers';
import { IRole } from '@/models/role';
import { createSlice } from '@reduxjs/toolkit';

export interface IRolesListInitialState {
  loading: boolean;
  error: string | null;
  roles: IRole[];
}

const initialState: IRolesListInitialState = {
  error: null,
  loading: false,
  roles: [],
};

const roleListSlice = createSlice({
  name: REDUCERS.ROLE_LIST,
  initialState,
  reducers: {
    getRolesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getRolesSuccess(state, action) {
      state.loading = false;
      state.roles = action.payload;
    },
    getRolesError(state, action) {
      state.loading = false;
      state.roles = initialState.roles;
      state.error = action.payload;
    },
  },
});

const roleListActions = roleListSlice.actions;

export { roleListActions };
export default roleListSlice.reducer;
