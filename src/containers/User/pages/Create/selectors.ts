import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { ICreateUserInitialState } from './slice';

const selectUserCreate = (state: RootState): ICreateUserInitialState =>
  state[REDUCERS.USER_CREATE];

const roleList = (state: RootState) => selectUserCreate(state).roles;
const isLoading = (state: RootState) => selectUserCreate(state).loading;
const isSuccess = (state: RootState) => selectUserCreate(state).success;

export const userCreateSelectors = { roleList, isLoading, isSuccess };
