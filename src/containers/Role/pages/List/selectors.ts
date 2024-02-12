import { REDUCERS } from '@/constants/reducers';
import { RootState } from '@/store/store';
import { IRolesListInitialState } from './slice';

const selectRoleList = (state: RootState): IRolesListInitialState =>
  state[REDUCERS.ROLE_LIST];
const roleList = (state: RootState) => selectRoleList(state).roles;
const isLoading = (state: RootState) => selectRoleList(state).loading;

export const roleListSelectors = {
  roleList,
  isLoading,
};
