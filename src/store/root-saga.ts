import blogCreateWatcher from '@/containers/Blog/pages/Create/saga';
import categoryCreateWatcher from '@/containers/Category/pages/Create/saga';
import categoryListWatcher from '@/containers/Category/pages/List/saga';
import categoryUpdateWatcher from '@/containers/Category/pages/Update/saga';
import { all, fork } from 'redux-saga/effects';
import authWatcher from './auth/saga';

const rootSaga = function* () {
  yield all([
    fork(authWatcher),
    fork(blogCreateWatcher),
    fork(categoryListWatcher),
    fork(categoryCreateWatcher),
    fork(categoryUpdateWatcher),
  ]);
};

export default rootSaga;
