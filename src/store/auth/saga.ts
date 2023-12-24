import { call, put, takeLatest } from 'redux-saga/effects';

import { authActions } from './slice';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import * as AuthModel from '@/models/auth';
import {
  ILogin,
  getUserData as getUserDataCall,
  login,
} from '@/services/auth/api';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleLogin({ payload }: PayloadAction<ILogin>) {
  try {
    const loginResult: { data: AuthModel.TResponse } = yield call(login, {
      email: payload.email,
      password: payload.password,
    });

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
      getUserDataCall
    );

    const success = userDataRequest.data?.success;
    const token = userDataRequest.data?.payload?.token;
    const email = userDataRequest.data?.payload?.email;

    if (success) yield put(authActions.getUserDataSuccess({ token, email }));
    else throw new Error('Token invalid');
  } catch (error: unknown) {
    yield put(authActions.getUserDataError(error));
  }
}

export default function* authWatcher() {
  yield takeLatest(authActions.loginRequest, handleLogin);
  yield takeLatest(authActions.logout, handleLogout);
  yield takeLatest(authActions.getUserDataRequest, getUserData);
}
