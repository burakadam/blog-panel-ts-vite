import * as UserModel from '@/models/user';

import { userService } from '@/services/user';
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

export default function* userListWatcher() {
  yield takeLatest(userListActions.getUsersRequest, getUsers);
}
