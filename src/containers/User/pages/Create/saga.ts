import * as RoleModel from '@/models/role';
import * as UserModel from '@/models/user';
import { roleService } from '@/services/role';
import { userService } from '@/services/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';
import { userCreateActions } from './slice';

function* getRoles() {
  try {
    const listResult: { data: RoleModel.TResponse } = yield call(
      roleService.getRoleList
    );

    const roles = listResult?.data?.payload || [];

    yield put(userCreateActions.getRoleListSuccess(roles));
  } catch (error) {
    yield put(userCreateActions.getRoleListError(error));
  }
}

function* createUser({ payload }: PayloadAction<UserModel.TUserValues>) {
  try {
    const userResult: { data: UserModel.TResponse } = yield call(
      userService.createUser,
      payload
    );

    yield put(userCreateActions.postUserSuccess());

    notification.success({
      message: userResult.data.statusCode,
      description: userResult.data.message,
    });
  } catch (error) {
    yield put(userCreateActions.postUserError(error));
  }
}

export default function* userCreateWatcher() {
  yield takeLatest(userCreateActions.getRoleListRequest, getRoles);
  yield takeLatest(userCreateActions.postUserRequest, createUser);
}
