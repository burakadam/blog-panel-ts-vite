import { call, put, takeLatest } from 'redux-saga/effects';

import { LOCAL_STORAGE } from '@/constants/localStorage';
import { authActions } from './slice';

import { authService } from '@/services/auth';
import { ILogin } from '@/services/auth/api';

function* login({ payload }: { payload: ILogin }) {
  try {
    const loginRes = yield call(authService.login, {
      username: payload.email,
      password: payload.password,
    });
    const token = loginRes.data.token;

    yield put(authActions.loginSuccess({ token }));
    localStorage.setItem(LOCAL_STORAGE.USER_TOKEN, token);
  } catch (error: unknown) {
    yield put(authActions.loginError(error));
  }
}

export default function* authWatcher() {
  yield takeLatest(authActions.loginRequest, login);
}
