import blogCreateWatcher from '@/containers/Blog/Create/saga';
import { all, fork } from 'redux-saga/effects';
import authWatcher from './auth/saga';

const rootSaga = function* () {
  yield all([fork(authWatcher), fork(blogCreateWatcher)]);
};

export default rootSaga;
