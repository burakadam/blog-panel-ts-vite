import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { IUpdateRoleInitialState } from './slice';

const selectRoleUpdate = (state: RootState): IUpdateRoleInitialState =>
  state[REDUCERS.ROLE_UPDATE];

const permissionList = (state: RootState) =>
  selectRoleUpdate(state).permissions;
const isLoading = (state: RootState) => selectRoleUpdate(state).loading;
const isSuccess = (state: RootState) => selectRoleUpdate(state).success;
const roleData = (state: RootState) => selectRoleUpdate(state).role;

export const roleUpdateSelectors = {
  permissionList,
  isLoading,
  isSuccess,
  roleData,
};
