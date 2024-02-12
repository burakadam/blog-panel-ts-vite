import * as PermissionModel from '@/models/permission';
import * as RoleModel from '@/models/role';

import { getPermissionList } from '@/services/permision/api';

import { roleService } from '@/services/role';
import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
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

function* createRole({ payload }: PayloadAction<RoleModel.TRoleValues>) {
  try {
    const createResult: { data: RoleModel.TResponse } = yield call(
      roleService.createRole,
      payload
    );

    yield put(roleCreateActions.postRoleSuccess());

    notification.success({
      message: createResult.data.statusCode,
      description: createResult.data.message,
    });
  } catch (error) {
    yield put(roleCreateActions.postRoleError(error));
  }
}

export default function* roleCreateWatcher() {
  yield takeLatest(roleCreateActions.getPermissionListRequest, getPermissions);
  yield takeLatest(roleCreateActions.postRoleRequest, createRole);
}
