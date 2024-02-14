import * as UserModel from '@/models/user';

import { userService } from '@/services/user';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { userListActions } from './slice';

function* getUsers() {
  try {
    const listResult: { data: UserModel.TResponse } = yield call(
      userService.getUserList
    );

    const users = listResult?.data?.payload || [];

    yield put(userListActions.getUsersSuccess(users));
  } catch (error) {
    yield put(userListActions.getUsersError(error));
  }
}

function* toggleUser({ payload }: PayloadAction<UserModel.IToggleValues>) {
  try {
    const toggleResult: { data: UserModel.TResponse } = yield call(
      userService.toggleUserActiveStatus,
      payload
    );

    const users = toggleResult?.data?.payload || [];

    yield put(userListActions.toggleUserActiveStatusSuccess(users));
  } catch (error) {
    yield put(userListActions.toggleUserActiveStatusError(error));
  }
}

export default function* userListWatcher() {
  yield takeLatest(userListActions.getUsersRequest, getUsers);
  yield takeLatest(userListActions.toggleUserActiveStatusRequest, toggleUser);
}
