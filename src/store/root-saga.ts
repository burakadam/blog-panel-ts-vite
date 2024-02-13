import blogCreateWatcher from '@/containers/Blog/pages/Create/saga';
import blogListWatcher from '@/containers/Blog/pages/List/saga';
import blogUpdateWatcher from '@/containers/Blog/pages/Update/saga';
import categoryCreateWatcher from '@/containers/Category/pages/Create/saga';
import categoryListWatcher from '@/containers/Category/pages/List/saga';
import categoryUpdateWatcher from '@/containers/Category/pages/Update/saga';
import roleCreateWatcher from '@/containers/Role/pages/Create/saga';
import roleListWatcher from '@/containers/Role/pages/List/saga';
import roleUpdateWatcher from '@/containers/Role/pages/Update/saga';

import userCreateWatcher from '@/containers/User/pages/Create/saga';
import userListWatcher from '@/containers/User/pages/List/saga';
import { all, fork } from 'redux-saga/effects';
import authWatcher from './auth/saga';

const rootSaga = function* () {
  yield all([
    fork(authWatcher),
    fork(blogCreateWatcher),
    fork(blogListWatcher),
    fork(categoryListWatcher),
    fork(categoryCreateWatcher),
    fork(categoryUpdateWatcher),
    fork(blogUpdateWatcher),
    fork(roleCreateWatcher),
    fork(roleListWatcher),
    fork(roleUpdateWatcher),
    fork(userCreateWatcher),
    fork(userListWatcher),
  ]);
};

export default rootSaga;
