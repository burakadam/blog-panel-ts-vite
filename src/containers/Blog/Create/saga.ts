import { takeLatest } from 'redux-saga/effects';
import { blogCreateActions } from './slice';

function* getCategories() {
  try {
    yield console.log('saga getCategories');
  } catch (error) {
    console.log('saga error');
  }
}

export default function* blogCreateWatcher() {
  yield takeLatest(blogCreateActions.getCategories, getCategories);
}
