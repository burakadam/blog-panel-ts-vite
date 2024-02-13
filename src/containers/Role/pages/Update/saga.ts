import * as RoleModel from '@/models/role';
import { roleService } from '@/services/role';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { roleUpdateActions } from './slice';

function* getRoleDetail({ payload }: PayloadAction<RoleModel.TRoleId>) {
  try {
    console.log('a');

    const roleResult: { data: RoleModel.TResponse } = yield call(
      roleService.getRoleDetail,
      payload._id
    );

    yield put(roleUpdateActions.getRoleDetailSuccess(roleResult.data?.payload));
  } catch (error) {
    yield put(roleUpdateActions.getRoleDetailError(error));
  }
}

export default function* roleUpdateWatcher() {
  yield takeLatest(roleUpdateActions.getRoleDetailRequest, getRoleDetail);
}
