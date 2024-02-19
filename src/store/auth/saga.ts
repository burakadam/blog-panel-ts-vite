import { call, put, takeLatest } from 'redux-saga/effects';

import { authActions } from './slice';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import * as AuthModel from '@/models/user';

import { authService } from '@/services/auth';
import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';

function* handleLogin({ payload }: PayloadAction<AuthModel.ILogin>) {
  try {
    const loginResult: { data: AuthModel.TResponse } = yield call(
      authService.login,
      {
        email: payload.email,
        password: payload.password,
      }
    );

    const success = loginResult.data?.success;
    const token = loginResult.data?.payload?.token;
    const email = loginResult.data?.payload?.email;

    if (success && token) {
      yield put(authActions.loginSuccess({ token, email }));
      localStorage.setItem(LOCAL_STORAGE.USER_TOKEN, token);
    } else {
      throw new Error('Login failed');
    }
  } catch (error: unknown) {
    yield put(authActions.loginError(error));
  }
}

const removeTokenFromStorage = () => {
  localStorage.removeItem('token');
};

function* handleLogout() {
  yield call(removeTokenFromStorage);
}

function* getUserData() {
  try {
    const userDataRequest: { data: AuthModel.TResponse } = yield call(
      authService.getUserData
    );

    const success = userDataRequest.data?.success;

    if (success)
      yield put(authActions.getUserDataSuccess(userDataRequest.data?.payload));
    else throw new Error('Token invalid');
  } catch (error: unknown) {
    yield put(authActions.getUserDataError(error));
  }
}

function* updateProfile({ payload }: PayloadAction<FormData>) {
  try {
    const updateRequest: { data: AuthModel.TResponse } = yield call(
      authService.updateUser,
      payload
    );

    yield put(
      authActions.updateUserProfileSuccess(updateRequest.data?.payload)
    );

    notification.success({
      message: updateRequest.data.statusCode,
      description: updateRequest.data.message,
    });
  } catch (error) {
    yield put(authActions.updateUserProfileError(error));
  }
}

export default function* authWatcher() {
  yield takeLatest(authActions.loginRequest, handleLogin);
  yield takeLatest(authActions.logout, handleLogout);
  yield takeLatest(authActions.getUserDataRequest, getUserData);
  yield takeLatest(authActions.updateUserProfileRequest, updateProfile);
}
