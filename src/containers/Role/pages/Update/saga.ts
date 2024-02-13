import * as RoleModel from '@/models/role';
import { roleService } from '@/services/role';
import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { roleUpdateActions } from './slice';

function* getRoleDetail({ payload }: PayloadAction<RoleModel.TRoleId>) {
  try {
    const roleResult: { data: RoleModel.TResponse } = yield call(
      roleService.getRoleDetail,
      payload._id
    );

    yield put(roleUpdateActions.getRoleDetailSuccess(roleResult.data?.payload));
  } catch (error) {
    yield put(roleUpdateActions.getRoleDetailError(error));
  }
}

function* updateRole({ payload }: PayloadAction<RoleModel.IRole>) {
  try {
    console.log(payload);

    const roleResult: { data: RoleModel.TResponse } = yield call(
      roleService.updateRole,
      payload
    );

    yield put(roleUpdateActions.postBlogUpdateSuccess());

    notification.success({
      message: roleResult.data.statusCode,
      description: roleResult.data.message,
    });
  } catch (error) {
    yield put(roleUpdateActions.postBlogUpdateError(error));
  }
}

export default function* roleUpdateWatcher() {
  yield takeLatest(roleUpdateActions.getRoleDetailRequest, getRoleDetail);
  yield takeLatest(roleUpdateActions.postBlogUpdateRequest, updateRole);
}
