import { call, put, takeLatest } from 'redux-saga/effects';

import { authActions } from './slice';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import { ILogin, login } from '@/services/auth/api';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin({ payload }: PayloadAction<ILogin>) {
  console.log('handleLogin');
  try {
    console.log('%%%%payload', payload);
    const loginRes: { success: boolean; token: string } = yield call(login, {
      email: payload.email,
      password: payload.password,
    });

    if (loginRes.success) {
      const { token } = loginRes;
      console.log(token);
      yield put(authActions.loginSuccess({ token }));
      localStorage.setItem(LOCAL_STORAGE.USER_TOKEN, token);
    } else {
      throw new Error('Login failed');
    }
  } catch (error: unknown) {
    yield put(authActions.loginError(error));
  }
}

export default function* authWatcher() {
  yield takeLatest(`${authActions.loginRequest}`, handleLogin);
}