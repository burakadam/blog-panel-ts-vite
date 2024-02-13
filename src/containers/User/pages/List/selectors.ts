import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { IUsersListInitialState } from './slice';

const selectUserList = (state: RootState): IUsersListInitialState =>
  state[REDUCERS.USER_LIST];
const userList = (state: RootState) => selectUserList(state).users;
const isLoading = (state: RootState) => selectUserList(state).loading;

export const userListSelectors = {
  userList,
  isLoading,
};
