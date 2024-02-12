import * as PermissionModel from '@/models/permission';
import { getPermissionList } from '@/services/permision/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { roleCreateActions } from '.';

function* getPermissions() {
  try {
    const listResult: { data: PermissionModel.TResponse } = yield call(
      getPermissionList
    );

    const permissions = listResult?.data?.payload || [];

    yield put(roleCreateActions.getPermissionListSuccess(permissions));
  } catch (error) {
    yield put(roleCreateActions.getPermissionListError(error));
  }
}

export default function* roleCreateWatcher() {
  yield takeLatest(roleCreateActions.getPermissionListRequest, getPermissions);
}
