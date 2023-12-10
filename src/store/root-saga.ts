import { all, fork } from 'redux-saga/effects';
import authWatcher from './auth/saga';

const rootSaga = function* () {
  yield all([fork(authWatcher)]);
};

export default rootSaga;
