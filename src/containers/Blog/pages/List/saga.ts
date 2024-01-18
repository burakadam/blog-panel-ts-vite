import { put, takeLatest } from 'redux-saga/effects';
import { blogListActions } from './slice';

function* getBlogs() {
  try {
    console.log('getBlogs');
  } catch (error) {
    yield put(blogListActions.getBlogsError(error));
  }
}

export default function* blogListWatcher() {
  yield takeLatest(blogListActions.getBlogsRequest, getBlogs);
}
