import { REDUCERS } from '@/constants/reducers';
import { IUser } from '@/models/user';
import { createSlice } from '@reduxjs/toolkit';

export interface IUsersListInitialState {
  loading: boolean;
  error: string | null;
  users: IUser[];
}

const initialState: IUsersListInitialState = {
  error: null,
  loading: false,
  users: [],
};

const userListSlice = createSlice({
  name: REDUCERS.USER_LIST,
  initialState,
  reducers: {
    getUsersRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess(state, action) {
      state.loading = false;
      state.users = action.payload;
    },
    getUsersError(state, action) {
      state.loading = false;
      state.users = initialState.users;
      state.error = action.payload;
    },
  },
});

const userListActions = userListSlice.actions;

export { userListActions };
export default userListSlice.reducer;
