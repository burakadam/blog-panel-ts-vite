import { call, put, takeLatest } from 'redux-saga/effects';

import { authActions } from './slice';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import * as AuthModel from '@/models/auth';
import { ILogin, login } from '@/services/auth/api';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin({ payload }: PayloadAction<ILogin>) {
  try {
    const loginRes: { data: AuthModel.TResponse } = yield call(login, {
      email: payload.email,
      password: payload.password,
    });

    const token = loginRes.data?.payload?.user?.token;
    const success = loginRes.data?.success;

    if (success && token) {
      yield put(authActions.loginSuccess({ token }));
      localStorage.setItem(LOCAL_STORAGE.USER_TOKEN, token);
    } else {
      throw new Error('Login failed');
    }
  } catch (error: unknown) {
    console.log('error', error);
    yield put(authActions.loginError(error));
  }
}

const removeTokenFromStorage = () => {
  localStorage.removeItem('userToken');
};

function* handleLogout() {
  yield call(removeTokenFromStorage);
}

export default function* authWatcher() {
  yield takeLatest(authActions.loginRequest, handleLogin);
  yield takeLatest(authActions.logout, handleLogout);
}
