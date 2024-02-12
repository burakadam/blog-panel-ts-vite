import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { ICreateRoleInitialState } from '.';

const selectRoleCreate = (state: RootState): ICreateRoleInitialState =>
  state[REDUCERS.ROLE_CREATE];

const permissionList = (state: RootState) =>
  selectRoleCreate(state).permissions;
const isLoading = (state: RootState) => selectRoleCreate(state).loading;
const isSuccess = (state: RootState) => selectRoleCreate(state).success;

export const roleCreateSelectors = { permissionList, isLoading, isSuccess };
