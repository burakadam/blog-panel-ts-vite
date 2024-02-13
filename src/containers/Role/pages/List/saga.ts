import * as RoleModel from '@/models/role';

import { roleService } from '@/services/role';
import { call, put, takeLatest } from 'redux-saga/effects';
import { roleListActions } from './slice';

function* getRoles() {
  try {
    const listResult: { data: RoleModel.TResponse } = yield call(
      roleService.getRoleList
    );

    const roles = listResult?.data?.payload || [];

    console.log('listResult', listResult);

    yield put(roleListActions.getRolesSuccess(roles));
  } catch (error) {
    yield put(roleListActions.getRolesError(error));
  }
}

export default function* roleListWatcher() {
  yield takeLatest(roleListActions.getRolesRequest, getRoles);
}
